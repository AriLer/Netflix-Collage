console.log('Injected file working!')
setCookie('netflixAuth', getCritApiVars(), 1)

function getCritApiVars() {
  let buildId
  try {
    let models = window.netflix.reactContext.models
    // authUrl = models.userInfo.data.authURL
    buildId = models.serverDefs.data.BUILD_IDENTIFIER
    if (typeof buildId == 'undefined') {
      throw new Error('buildId location have changed.')
    }
  } catch (err) {
    throw new Error('Unable to obtain critical API variables')
  }
  console.debug(`buildId`, buildId)
  return buildId
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()
  document.cookie =
    cname + '=' + JSON.stringify(cvalue) + ';' + expires + ';path=/'
}
