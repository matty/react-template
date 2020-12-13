const fs = require('fs')
const path = require('path')

const buildDir = path.join(__dirname, 'build')

fs.rmdir(buildDir,
    { recursive: true },
    () => console.log('clean ' + buildDir))