const { useBabelRc, override, addPostcssPlugins } = require('customize-cra')

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    addPostcssPlugins([
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
            autoprefixer: {
                flexbox: "no-2009"
            },
            stage: 3,
            features: {
                "nesting-rules": true
            }
        })
    ])
);