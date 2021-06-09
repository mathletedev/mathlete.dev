const { join } = require("path");

module.exports = {
	sassOptions: {
		includePaths: [join(__dirname, "src", "styles")]
	}
};
