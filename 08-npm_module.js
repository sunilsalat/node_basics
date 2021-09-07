// Anyone can publish package , so be aware of security

// local dependency --- npm i <package-name>
// Global dependecy --- npm install -g <package-name>

// package.json  --- maifest file (stores info about packages)
// npm init --- initialize package.json
// npm init -y(everything by default)

// use npm install to install all the dependencies from package.json at once 

// what does loadash do?
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
