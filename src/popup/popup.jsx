import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button, Spinner } from 'react-bootstrap'
import './popup.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import ControlledCarousel from '../components/ControlledCarousel'

const App = () => {
  const [expanded, setExpanded] = useState(false)
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const getHistory = () => {
    if (!data) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {}, (response) => {
          setData({ ...response })
          console.log('data has been set: ', response)
          setIsLoading(false)
          setExpanded(true)
          setTimeout(() => setIsShown(true), 150)
        })
      })
    }
  }

  const handleClick = () => {
    setIsLoading(true)
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let url = tabs[0].url
      if (!url.includes('www.netflix.com')) {
        chrome.tabs.create(
          {
            url: 'https://www.netflix.com/YourAccount',
          },
          (tab) => {
            getHistory()
          }
        )
      } else {
        getHistory()
      }
    })
  }

  let startWindow = (
    <React.Fragment>
      <h1>Your Netflix Experience</h1>
      <div id="action-section">
        {isLoading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <Button id="welcome-button" onClick={handleClick}>
            View & share
          </Button>
        )}
      </div>
    </React.Fragment>
  )

  let mainWindow = isShown && <ControlledCarousel data={data} />

  return (
    <div id={expanded ? 'main-window' : 'start-window'}>
      {expanded ? mainWindow : startWindow}
    </div>
  )
}

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)
document.head.append(
  '<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">'
)
ReactDOM.render(<App />, root)
