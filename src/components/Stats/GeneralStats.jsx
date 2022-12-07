import React from 'react'

function GeneralStats(props) {
  const getLongestBinge = () => {
    let arr = [0] // date , amount
    let prevDate = props.history[0].dateStr
    let i = 0
    props.history.map((item) => {
      if (item.dateStr === prevDate) {
        arr[i] += item.watchtime
      } else {
        arr.push(item.watchtime)
        prevDate = item.dateStr
        i++
      }
    })
    let most = 0
    for (let day of arr) {
      most = Math.max(day, most)
    }
    let hours = Math.floor(most / 60 / 60)
    let minutes = Math.floor(most / 60) - hours * 60
    return `${hours}h ${minutes}m`
  }

  return (
    <div className="chart" id="general-stats">
      <h2>Titles watched</h2>
      <p>{props.history.length}</p>
      <hr />
      <h2>Most Netflix In a Day</h2>
      <p>{getLongestBinge()}</p>
    </div>
  )
}

export default GeneralStats
