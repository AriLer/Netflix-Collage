import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Collage from './collage/Collage'
import Stats from './Stats/Stats'
import ShareRow from './shareRow/ShareRow'

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  if (props.data && props.data.history && props.data.history.length !== 0) {
    return (
      <React.Fragment>
        <Carousel
          id="carousel-container"
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
        >
          <Carousel.Item className="carousel-page">
            <Collage data={props.data} />
          </Carousel.Item>
          <Carousel.Item className="carousel-page">
            <Stats history={props.data.history} />
          </Carousel.Item>
        </Carousel>
        <ShareRow data={props.data} />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment style={{ padding: '1rem' }}>
        <div id="empty-history">
          <h1>Your history for this month is empty ...</h1>
          <img src="./images/no-connection.png"></img>
          <p> try Refreshing Netflix and then reopen the extension</p>
        </div>
      </React.Fragment>
    )
  }
}

export default ControlledCarousel
