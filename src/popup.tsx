import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

function Popup() {
  return (
    <div
      className="p-4 w-[400px]"
    >
      <h1 className="text-3xl bold mb-4">React Chrome Extension</h1>
      <section className="text-lg">
        <div>
          <span className="font-mono">Author: </span><span>山月</span>
        </div>
        <div>
          <span className="font-mono">Github: </span>
          <a href="https://github.com/shfshanyue/react-chrome-extension">react-chrome-extension</a>
        </div>
      </section>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById('app')
)
