import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.min.css'
import './styles/index.scss'
import App from './App'
import state from './redux/state'

ReactDOM.render(
	<React.StrictMode>
		<App state={state} />
	</React.StrictMode>,
	document.getElementById('root')
)
