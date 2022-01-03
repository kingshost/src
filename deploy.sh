#!/bin/sh

echo 'Incrementing version and pushing repo changes...'
git add -A
git commit -m 'Automatic predeployment commit'
npm version patch
git push
git push --tags

echo 'Building...'
rm -rf .next
yarn build

cd out
cp ../readme.md .
cp -r ../out-files/. .
git init
git remote master https://github.com/kingshost/kingshost.github.io.git
git add -A
git commit -m 'Automatic deployment commit'
git push master --force
cd ..

echo 'Done.'
