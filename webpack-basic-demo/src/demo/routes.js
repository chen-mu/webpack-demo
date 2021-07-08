const Routers = [
	{
		title: 'page1',
		path: '/demo/page1',
		getComponent(nextState, cb) {
			require.ensure(
				[],
				function (require) {
					return cb(null, require('./page1/index').default)
				},
				'page1'
			)
		}
	}
]

export default Routers
