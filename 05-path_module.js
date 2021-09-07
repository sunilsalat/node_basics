const path = require('path')


//path seperator 
console.log(path.sep)

//hepls in joining two dirs
const filePath = path.join('/context', 'subfolder', 'readme.txt')
console.log(`the file path is --${filePath} `)

//basename
const base = path.basename(filePath)
console.log(base)

//resolve absolute path 
const absolute = path.resolve(__dirname, 'context', 'subfolder', 'readme.txt')
console.log(absolute)

