const { readdirSync } = require('fs');
const fromPairs = require('lodash/fromPairs');
const { version } = require('./package');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  publicRuntimeConfig: {
    domain: production ? 'https://kingshost.github.io' : 'http://localhost:3000',
    assetsPath: `/static${production ? `/${version}` : ''}`,
  },
  exportPathMap: () =>
    fromPairs(
      readdirSync('./pages')
        .filter((item) => !item.startsWith('_'))
        .map((item) => item.slice(0, -3))
        .map((item) => [`/${item === 'index' ? '' : item}`, { page: `/${item}` }])
    ),
};
