import React, { useState } from 'react'
import './collage.css'
import Poster from './Poster'
import statStyle from './styles.js'

const Collage = (props) => {
  setTimeout(() => setIsShowing(true), 50)

  const [isShowing, setIsShowing] = useState(false)
  const [focused, setFocused] = useState(-1)
  const [list, setList] = useState([])
  let arrLength = 6

  const createSummery = (lng) => {
    let list = []
    props.data.history.forEach((e) => {
      if (e.rating !== 1) {
        let idx = list.findIndex((t) => t.title === e.title)
        if (idx === -1) {
          let newItem = { ...e }
          newItem.watchtime = e.rating === 2 ? e.watchtime * 2 : e.watchtime
          list.push({ ...newItem })
        } else {
          list[idx].watchtime += e.watchtime * 2
        }
      }
    })

    list.sort((a, b) => (a.watchtime > b.watchtime ? -1 : 1))
    list.length = list.length > lng ? lng : list.length
    console.log('final list is', list)
    return list
  }
  let styleData = statStyle[list.length - 1]

  if (list.length === 0 && props.data.history.length > 0) {
    setList(createSummery(arrLength))
  }

  return (
    <div
      id="collage-container"
      style={{ display: isShowing ? 'visible' : 'hidden' }}
    >
      {list.map((item, i) => {
        return (
          <Poster
            data={item}
            idx={i}
            key={`collage-poster__${i}`}
            sty={styleData[i]}
            focus={(idx) => {
              console.log('focusing on ', idx)
              setFocused(idx)
            }}
            isFocused={focused === i}
          />
        )
      })}
    </div>
  )
}

export default Collage
