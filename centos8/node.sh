#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
nvm --version && nvm install 14.6.0
npm -v && {
    npm install -g typescript@3.9.7
    tsc -v

    npm install -g tsd
    tsd --version

    npm install -g eslint
    eslint -v
}
