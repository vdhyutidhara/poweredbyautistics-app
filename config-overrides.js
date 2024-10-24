const path = require("path");

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.mdx$/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      "@mdx-js/loader",
    ],
  });

  config.module.rules[1].oneOf = config.module.rules[1].oneOf.map((one) => {
    if (one.exclude) {
      one.exclude = [
        /^$/,
        /\.(js|mjs|jsx|ts|tsx|mdx|css)$/,
        /\.html$/,
        /\.json$/,
      ];
    }
    return one;
  });
  return config;
};
