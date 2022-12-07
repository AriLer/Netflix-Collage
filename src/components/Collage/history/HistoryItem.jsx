import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HistoryItem = (props) => {
  const getRatingImgPath = () => {
    return props.data.rating === 2
      ? './images/like.png'
      : './images/dislike.png'
  }

  return (
    <Row className="item-card">
      <Col xs={3}>
        <img src={props.data.poster} alt="poster" className="poster" />
      </Col>
      <Col xs={9} className="item-info">
        <h1>
          {props.data.rating != 0 && <img src={getRatingImgPath()} />}
          {props.data.title}
        </h1>
        {props.data.type === 'tv' && <p>{props.data.epTitle}</p>}
      </Col>
    </Row>
  )
}
export default HistoryItem
