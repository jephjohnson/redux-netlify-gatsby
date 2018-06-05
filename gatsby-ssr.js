import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import reducer from "./src/reducers/"

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {

    //const store = createStore()
    const store = createStore(
		reducer,
		applyMiddleware(logger)
	)

    const ConnectedBody = () => (
        <Provider store={store}>
            {bodyComponent}
        </Provider>
    )
    replaceBodyHTMLString(renderToString(<ConnectedBody/>))
}
