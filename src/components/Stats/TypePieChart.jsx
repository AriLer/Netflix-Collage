import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

function getTypeStas(history) {
  let typeStats = [0, 0]
  history.map((item) => {
    item.type === 'tv' ? (typeStats[0] += 1) : (typeStats[1] += 1)
  })
  return [
    { name: 'tv', value: typeStats[0] },
    { name: 'movies', value: typeStats[1] },
  ]
}

function TypePieChart(props) {
  const data = getTypeStas(props.history)
  const COLORS = ['#c10b0b', '#6b6b6b']

  return (
    <div className="chart" id="type-chart">
      <PieChart width={176} height={176}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          stroke={'#00000'}
          labelLine={false}
          outerRadius={70}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <h2 id="type-chart-title">
        <span style={{ color: '#700000' }}>Shows</span> |{' '}
        <span style={{ color: '#bebebe' }}>Movies</span>
      </h2>
    </div>
  )
}

export default TypePieChart
