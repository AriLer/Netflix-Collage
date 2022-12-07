import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TypePieChart from './TypePieChart'
import WatchtimeChart from './WatchtimeChart'
import TopGenres from './GeneralStats'
import './stats.css'

function Stats(props) {
  return (
    <Container fluid>
      <Row style={{ height: '14rem' }}>
        <Col>
          <TopGenres history={props.history}/>
        </Col>
        <Col>
          <TypePieChart history={props.history} />
        </Col>
      </Row>

      <WatchtimeChart history={props.history} />
    </Container>
  )
}

export default Stats
