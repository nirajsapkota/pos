const { alias } = require("react-app-rewire-alias")

module.exports = function override(config) {
    alias({
        "@typings": "src/typings",
	    "_icons": "src/assets/icons",
        "_images": "src/assets/images"
    })(config)

    return config
}
