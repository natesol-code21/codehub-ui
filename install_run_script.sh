#!/bin/sh

#git clone https://github.com/aurelia/skeleton-navigation /tmp/aurelia-skeleton
#cp /tmp/aurelia-skeleton/skeleton-es2016 /app
#JSPM_GITHUB_AUTH_TOKEN='2fcaec9eeb9a1580f3f79edfc8abfc3943e1769f'
cd /app
#npm install -y
jspm install -y
gulp build
