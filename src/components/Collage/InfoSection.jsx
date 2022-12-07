import React from 'react'

function getDateString(timestamp) {
  let d = new Date(timestamp)
  return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
}

function infoSection(props) {
  return (
    <section
      className="poster-info"
      style={{ visibility: props.isFocused ? 'visible' : 'hidden' }}
    >
      <div className="collage-ranking">#{props.idx}</div>
      <p className="last-watched">
        {props.data.type === 'tv' && 'last '} watched{' '}
        {getDateString(props.data.dateStr)}
      </p>
    </section>
  )
}
export default infoSection
