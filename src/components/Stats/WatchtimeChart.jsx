import React from 'react'
import { BarChart, Bar, XAxis } from 'recharts'

function WatchtimeChart(props) {
  const getData = () => {
    let data = [
      {
        day: 'Sun',
        watchtime: 0,
      },
      {
        day: 'Mon',
        watchtime: 0,
      },
      {
        day: 'Tue',
        watchtime: 0,
      },
      {
        day: 'Wed',
        watchtime: 0,
      },
      {
        day: 'Thu',
        watchtime: 0,
      },
      {
        day: 'Fri',
        watchtime: 0,
      },
      {
        day: 'Sat',
        watchtime: 0,
      },
    ]
    props.history.forEach((item) => {
      let watchtime = item.watchtime
      let myDate = new Date(item.dateStr)
      if (watchtime) {
        data[myDate.getDay()].watchtime += watchtime
      }
    })
    return data
  }

  getData()
  return (
    <div className="chart" id="watchtime-chart">
      <h2>Watchtime by day</h2>

      <BarChart width={300} height={150} data={getData()}>
        <XAxis dataKey="day" />
        <Bar dataKey="watchtime" fill="#db0000" />
      </BarChart>
    </div>
  )
}

export default WatchtimeChart
