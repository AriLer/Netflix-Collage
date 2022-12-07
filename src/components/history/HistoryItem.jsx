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
        <img
          src={props.data.poster}
          alt="poster"
          className="history-poster"
        />
      </Col>
      <Col xs={9} className="history-item-info">
        <h1 className="title">
          {props.data.rating != 0 && (
            <img className="rating-icon" src={getRatingImgPath()} />
          )}
          {props.data.title}
        </h1>
        {props.data.type === 'tv' && (
          <p className="ep-title">{props.data.epTitle}</p>
        )}
      </Col>
    </Row>
  )
}
export default HistoryItem
