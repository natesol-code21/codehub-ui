#!/bin/sh

#JSPM_GITHUB_AUTH_TOKEN='bmF0ZXNvbC1jb2RlMjE6TWVzczE5NTUlMjMlMjMlNDAlNDA='
JSPM_GITHUB_AUTH_TOKEN='8c23e7f4b845d3bfece6884b7f0f86190b038f02'
jspm config registries.github.remote https://github.jspm.io
jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
jspm config registries.github.maxRepoSize 1000
jspm config registries.github.handler jspm-github
jspm registry export github
