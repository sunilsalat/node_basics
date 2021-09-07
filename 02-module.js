//Module - Encapsulated code , Only show a reqeuired code
//evey file in node is module , CommonJS

require("./03-exports_example"); //scope of this line end just after this

const sayHi = require("./03-exports_example");
sayHi("sunil");

//hello jumbo will be printed cus of line 04 and function is invoked in 03-exports_examole.js




// notes from telusko

// modules are encapsulated units
// you can skip module in module.exports 