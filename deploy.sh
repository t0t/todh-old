#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 't-o-d-h.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:t0t/todh.git master:gh-pages

# En caso de no tener configurado su cuenta de GitHub para conectarse via SSH
# git push -f https://github.com/t0t/todh.git master:gh-pages

cd -