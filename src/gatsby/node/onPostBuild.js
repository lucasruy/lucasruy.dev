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
  
    fs.renameSync(PUBLIC_PATH.base, path.join(ROOT, BUILD_PATH))
    fs.renameSync(PUBLIC_PATH.dev, PUBLIC_PATH.base)
    fs.writeFileSync(`${BUILD_PATH}/CNAME`, 'www.lucasruy.dev')
  } catch (error) {
    console.error('Error in onPostBuild.js file: \n', error)
  }
}
