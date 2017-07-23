import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'


const rows = Math.floor(window.innerHeight / 20)
const columns = Math.floor(window.innerWidth / 20)

ReactDOM.render(<App rows={rows} columns={columns} />, document.getElementById('react-root'))
registerServiceWorker()
