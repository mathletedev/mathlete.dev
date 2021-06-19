module.exports = {
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader"
		});
		config.resolve.alias = {
			...config.resolve.alias,
			"~": __dirname
		};

		if (!isServer) config.node = { fs: "empty" };

		return config;
	}
};
