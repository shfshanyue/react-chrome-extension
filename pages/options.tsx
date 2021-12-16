import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import './index.css'

function Options() {
  const [backgroundColorName, setBackgroundColorName] = useState<string>('')

  useEffect(() => {
    if (backgroundColorName) {
      chrome.storage.sync.set({
        backgroundColorName
      })
    }
  }, [backgroundColorName])

  useEffect(() => {
    chrome.storage.sync.get({
      backgroundColorName: 'bg-gray-50'
    }).then(({ backgroundColorName }) => {
      setBackgroundColorName(backgroundColorName)
    })
  }, [])

  const names = [
    'bg-gray-50',
    'bg-gray-100',
    'bg-green-50',
    'bg-green-100',
    'bg-red-50',
    'bg-red-100',
    'bg-blue-50',
    'bg-blue-100',
  ]

  return (
    <div className="container p-4">
      <h1 className="mb-4 text-gray-600">
        Select BackgroundColor
      </h1>
      <div className="flex gap-4">
        {
          names.map(name => (
            <div
              key={name}
              className={classNames(name, name === backgroundColorName ? 'ring-2 ring-orange-400' : '', 'cursor-pointer shadow rounded w-16 h-16')}
              onClick={() => {
                setBackgroundColorName(name)
              }}
            >
        
            </div>
          ))
        }
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById('app')
)
