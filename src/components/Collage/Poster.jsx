import React from 'react'
import InfoSection from './InfoSection'

const Poster = (props) => {
  return (
    <div
      onMouseDown={() => {
        props.focus(props.isFocused ? -1 : props.idx)
      }}
      className={`poster-item ${props.isFocused ? 'focus' : ''}`}
      style={{
        position: 'absolute',
        top: `${props.sty.top}rem`,
        left: `${props.sty.left}rem`,
        zIndex: `${props.sty.index}`,
        filter: `blur(${props.sty.blur}px)`,
        transform: `scale(${props.sty.scale})`,
      }}
    >
      <img
        src={props.data.poster ? props.data.poster : './images/not-found.png'}
        alt="poster not found"
        className="poster-img"
      />

      <InfoSection
        isFocused={props.isFocused}
        data={props.data}
        idx={props.idx + 1}
        showTitle={!props.data.poster}
      />
    </div>
  )
}
export default Poster
