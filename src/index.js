import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.min.css'
import './styles/index.scss'
import App from './App'
import store from './redux/reduxStore'
import { Provider } from 'react-redux'

let rerenderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App
					store={store}
					state={store.getState()}
					dispatch={store.dispatch.bind(store)}
				/>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	)
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
