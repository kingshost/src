const { execSync } = require('child_process');
const { version } = require('../package');

execSync(`mv out/static out/static-tmp; mkdir out/static; mv out/static-tmp out/static/${version}`);
