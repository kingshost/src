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
cp -r ../out-files .
git add -A
git commit -m 'Automatic deployment commit'
git push --force
cd ..

echo 'Done.'
