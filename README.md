Agevio React Demo
=================

Demonstrates how to integrate Agevio with React library.

# Installation

It requires node.js v4 or higher and npm v3 or greater. If you already use node.js v4 - just upgrade npm to v3 `npm -g install npm@latest`. If you don't want to do that, you can just use nvm to have different versions of node.js and quickly switch between them. [https://github.com/creationix/nvm](Learn more about nvm here.)

1. `npm install`
3. `$(npm bin)/brunch watch --server`
4. Open your browser at [http://localhost:3333](http://localhost:3333)

# Alternative Installation

Run those two commands to build and run demo container with Docker:

1. `docker build -t agevio-react-demo .`
2. `docker run -ti --net=host agevio-react-demo`
