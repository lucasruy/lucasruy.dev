const path = require("path")
const fs = require("fs")
const pkg = require("./package.json")

exports.createPages = require("./src/gatsby/node/createPages")
exports.onPreInit = require("./src/gatsby/node/onPreInit")
exports.onPreBootstrap = require("./src/gatsby/node/onPreBootstrap")
exports.onPostBuild = require("./src/gatsby/node/onPostBuild")
exports.sourceNodes = require("./src/gatsby/node/sourceNodes")
