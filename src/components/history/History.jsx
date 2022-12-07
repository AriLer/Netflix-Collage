import React from 'react'
import HistoryItem from './HistoryItem'
import './history.css'

const ShowList = (props) => {
  return (
    <div className="full-history">
      {props.data.history.map((item, index) => {
        return <HistoryItem data={item} key={`historyItem_${index}`} />
      })}
      <p>icons for this app were taken from flaticon.com</p>
    </div>
  )
}

export default ShowList
