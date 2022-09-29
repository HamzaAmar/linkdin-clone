const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': './src/components',
    '@scss': './src/scss',
    '@routes': './src/routes',
    '@constants': './src/constants',
    '@assets': './src/assets',
    '@hooks': './src/hooks',
    '@utils': './src/utils',
    '@api': './src/api',
  })(config)

  return config
}
