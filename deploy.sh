#!/usr/bin/env/ sh

#! /usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/WafelT/geamtermopan-vue.git master:gh-pages

cd -
