import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.min.css'
import './styles/index.scss'
import App from './App'
import store from './redux/state'

let rerenderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={store.getState()}
				dispatch={store.dispatch.bind(store)}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	)
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
