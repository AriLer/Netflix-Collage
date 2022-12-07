import React, { useState } from 'react'
import History from '../history/History'
import { Modal, Button } from 'react-bootstrap'
import domtoimage from 'dom-to-image-more'
import './shareRow.css'

function ShareRow(props) {
  const [showHistory, setShowHistory] = useState(false)

  const shareClickHandler = () => {
    console.log('this is the download image method')
    const indicatorsEl = document.getElementsByClassName(
      'carousel-indicators'
    )[0]
    const shareRowEl = document.getElementById('share-row')

    indicatorsEl.style.visibility = 'hidden'
    shareRowEl.style.visibility = 'hidden'
    document.body.style.height = '30rem'

    domtoimage
      .toPng(document.getElementById('root'), { quality: 5 })
      .then(function (dataUrl) {
        var link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
        indicatorsEl.style.visibility = 'visible'
        shareRowEl.style.visibility = 'visible'
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
        indicatorsEl.style.visibility = 'visible'
        shareRowEl.style.visibility = 'visible'
      })
  }

  const handleHistoryClick = (IsShowing) => {
    const indicatorsEl = document.getElementsByClassName(
      'carousel-indicators'
    )[0]

    if (IsShowing) {
      indicatorsEl.style.visibility = 'visible'
      setShowHistory(false)
    } else {
      indicatorsEl.style.visibility = 'hidden'
      setShowHistory(true)
    }
  }
  return (
    <div id="share-row">
      <Button id="download-btn" onClick={shareClickHandler}>
        <div>
          <img src="./images/download.png" />
        </div>
        Download Image
      </Button>
      <div id="history-btn">
        <img
          src="./images/history.png"
          onClick={() => handleHistoryClick(false)}
        />
      </div>

      <Modal
        show={showHistory}
        onHide={() => handleHistoryClick(true)}
        id="history-modal"
      >
        <Modal.Body id="history-modal-body">
          <History data={props.data} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ShareRow
