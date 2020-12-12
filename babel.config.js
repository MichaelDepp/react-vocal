module.exports = (api) => ({
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'entry',
			},
		],
		'@babel/preset-react',
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-transform-react-jsx',
		...(api.env('test')
			? [
					'@babel/plugin-transform-runtime',
					{
						regenerator: true,
					},
			  ]
			: []),
	],
})
