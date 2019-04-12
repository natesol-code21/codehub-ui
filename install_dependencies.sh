#!/bin/sh
apt-get install python-yaml -y
jspm config registries.github.repo jspm-registry
jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
jspm config registries.github.maxRepoSize 10000000
jspm config registries.github.handler jspm-github
jspm registry export github
