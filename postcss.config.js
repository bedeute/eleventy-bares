module.exports = ({ env }) => ({
  plugins: {
    "postcss-extend-rule": {},
    "postcss-nesting": {},
    "postcss-import": {
      noIsPseudoSelector: true
    },
    "postcss-dark-theme-class": {
      darkSelector: '.is-dark',
      lightSelector: '.is-light'
    },
    autoprefixer: {},
    cssnano:
      env === "production"
        ? {
            preset: ["default", { discardComments: { removeAll: true } }],
          }
        : false,
  },
});