import { lazy } from 'react'
const Routers = [
	{
		title: 'page1',
		path: '/demo/page1',
		component: lazy(() => import('./page1/index'))
	}
]

export default Routers
