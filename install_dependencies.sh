#!/bin/sh

#JSPM_GITHUB_AUTH_TOKEN='bmF0ZXNvbC1jb2RlMjE6TWVzczE5NTUlMjMlMjMlNDAlNDA='
JSPM_GITHUB_AUTH_TOKEN='239c12e8e6336b1e717bb49f316cff6c95d34091'
jspm config registries.github.remote https://github.jspm.io
jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
jspm config registries.github.maxRepoSize 1000
jspm config registries.github.handler jspm-github
jspm registry export github
