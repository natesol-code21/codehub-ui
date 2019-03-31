#!/bin/sh
jspm config registries.github.remote https://github.jspm.io
jspm config registries.github.auth $REGISTRY_PASS
jspm config registries.github.maxRepoSize 100000
jspm config registries.github.handler jspm-github
jspm registry export github
