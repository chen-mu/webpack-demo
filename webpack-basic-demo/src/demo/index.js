import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Routers from './routes'
import Demo from './page1/index'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

console.log('Routers===>', Routers)

// const element =
const Root = () => {
	const pathname = location.pathname
	return (
		<div>
			<BrowserRouter basename='/'>
				<Route path={pathname} component={Demo}></Route>
			</BrowserRouter>
		</div>
	)
}
ReactDOM.render(Root(), document.getElementById('root'))
