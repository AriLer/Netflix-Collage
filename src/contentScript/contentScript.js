const baseUrl = 'https://www.netflix.com/'

addScript()

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  getData().then((result) => {
    sendResponse(result)
  })
  return true
})

async function getData() {
  const buildId = JSON.parse(getCookie('netflixAuth'))
  const user = await getNetflixProfile()
  let data = await getStoragedHistory(user.userId)
  console.log('stored data: ', data)
  let lastStr = 0
  if (data.user.userId && data.history.length !== 0) {
    lastStr = data.history[0].dateStr
  } else {
    data.user = { ...user }
  }
  let history = await getNetflixHistory(lastStr)
  history = await Promise.all(
    history.map(async (item) => {
      let moreData = await getMoreData(item, buildId)
      return await { ...item, ...moreData }
    })
  )

  data.history.unshift(...history)
  chrome.storage.local.set({ netflixData: data })
  return data
}

async function getNetflixProfile() {
  let res = await fetch(`${baseUrl}api/shakti/mre/profileLock`)
  let json = await res.json()
  let pf = json.profileInfo
  return { userName: pf.profileName, userId: pf.guid }
}

async function getNetflixHistory(lastStr) {
  let history = []
  for (let page = 0; page < 5; page++) {
    let res = await fetch(`${baseUrl}api/shakti/mre/viewingactivity?pg=${page}`)
    let json = await res.json()
    console.log('json', json)
    for (let i of json['viewedItems']) {
      if (isMonthAgo(i.date) || i.date <= lastStr) {
        console.log('netflix history: ', history)
        console.log('history', history)
        return history
      }
      if (i.title.trim().length === 0) {
        continue
      }
      history.push(condenceItem(i))
    }
  }
  return history
}

async function getMoreData(item, buildId) {
  let res = await fetch(
    `${baseUrl}nq/website/memberapi/${buildId}/metadata?movieid=${item.id}`
  )
  let json = await res.json()
  let moreData
  if (json.video.type === 'show') {
    moreData = json.video.seasons
      .filter((s) => s.title === item.sTitle)[0]
      .episodes.filter((e) => e.id === item.id)[0]
  } else {
    moreData = json.video
  }
  if (moreData) {
    return {
      movieID: json.video.id,
      runtime: moreData.runtime,
      watchtime: moreData.bookmark.offset,
      poster: json.video.boxart[1].url,
      rating: json.video.userRating.userRating,
    }
  }
}

function condenceItem(item) {
  let data = item.seriesTitle
    ? {
        type: 'tv',
        sTitle: item.seasonDescriptor,
        title: item.seriesTitle,
        dateStr: item.date,
        epTitle: item.title.replace(/"/g, ''),
      }
    : {
        type: 'movie',
        title: item.title,
      }
  data.dateStr = item.date
  data.id = item.movieID
  return data
}

function isMonthAgo(dateStr) {
  let diff = (Date.now() - dateStr) / (1000 * 60 * 60 * 24)
  return diff > 30
}

async function getStoragedHistory(userId) {
  return new Promise((resolve) => {
    chrome.storage.local.get('netflixData', (result) => {
      let stored = { ...result.netflixData }
      if (stored.history === undefined || userId !== stored.user.userId) {
        console.log('something is undefined ')
        resolve({ user: {}, history: [] })
      } else {
        let history = stored.history
        for (let i = history.length - 1; i >= 0; i -= 1) {
          if (!isMonthAgo(history[i].dateStr)) {
            break
          }
          stored.history.splice(i, 1)
        }
        resolve(stored)
      }
    })
  })
}

function getCookie(cname) {
  let name = cname + '='
  let ca = decodeURIComponent(document.cookie).split(';')
  for (let c of ca) {
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return 'NO-COOKIE'
}

function addScript() {
  const injectScript = document.createElement('script')
  injectScript.src = chrome.runtime.getURL('inject.js')
  document.head.appendChild(injectScript)
  console.log('script added')
}
