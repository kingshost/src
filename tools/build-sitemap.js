const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const template = require('lodash/template');

const { publicRuntimeConfig: { domain }, exportPathMap } = require('../next.config');

const buildSitemap = template(readFileSync(join(__dirname, './sitemap.ejs')));
const routes = Object.keys(exportPathMap()).filter(item => item !== '/');

writeFileSync('out/robots.txt', [
  'User-agent: *',
  `Sitemap: ${domain}/sitemap.xml`
].join('\n'));

writeFileSync(
  'out/sitemap.xml',
  buildSitemap({ today: (new Date()).toJSON().slice(0, 10), domain, routes }).replace(/\n\s*/g, '')
);
