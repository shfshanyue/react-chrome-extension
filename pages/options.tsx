import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

function Options() {
  return (
    <div>hello, options.</div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById('app')
)
