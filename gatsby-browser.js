import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import reducer from "./src/reducers/"

const history = createHistory()
const middleware = routerMiddleware(history)

exports.replaceRouterComponent = ({ history }) => {
	const store = createStore(
		reducer,
		applyMiddleware(
			middleware, logger
		)
	)

	const ConnectedRouterWrapper = ({ children }) => (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				{children}
			</ConnectedRouter>
		</Provider>
	)

	return ConnectedRouterWrapper
}






