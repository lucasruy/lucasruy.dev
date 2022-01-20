const path = require("path")
const fs = require("fs")
const pkg = require("../../../package.json")

module.exports = () => {
  try {
    const ROOT = path.resolve('./')
    const BUILD_PATH = pkg.build.destination
    const PUBLIC_PATH = {
      base: path.join(ROOT, "public"),
      dev: path.join(ROOT, "public_dev")
    }
  
    const isBuildMode = process.argv[2] === "build"
  
    if (isBuildMode) {
      fs.rmSync(path.join(ROOT, BUILD_PATH), { recursive: true })
      fs.renameSync(PUBLIC_PATH.base, PUBLIC_PATH.dev)
    }
  } catch (error) {
    console.error('Error in onPreInit.js file: \n', error)
  }
}
