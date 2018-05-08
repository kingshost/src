const { writeFileSync } = require('fs');
const { bookTitle, iconSizes, splashIconSize, themeColor, backgroundColor } = require('../util/meta');
const { publicRuntimeConfig: { domain, assetsPath } } = require('../next.config');

const icons = iconSizes.map(size => ({
  src: `${assetsPath}/icons/icon-${size}x${size}.png`,
  sizes: `${size}x${size}`
})).concat([{
  src: `${assetsPath}/icons/icon-splash-${splashIconSize}x${splashIconSize}.png`,
  sizes: `${splashIconSize}x${splashIconSize}`
}]);

writeFileSync('out/manifest.json', JSON.stringify({
  name: bookTitle,
  short_name: bookTitle,
  icons,
  start_url: domain,
  display: 'standalone',
  theme_color: themeColor,
  background_color: backgroundColor
}));
