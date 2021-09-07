//fs -filesysyem module

const { readFile, writeFile, readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./context/first.txt", "utf8");
const second = readFileSync("./context/second.txt", "utf8");

// console.log(first, second)

writeFileSync(
  "./context/result-sync.txt",
  `this file is generated with writeFileSync:
 ${first}, ${second} and some additional another text`,
  { flag: "a" } //flag 'a' show file is being appended
);

//readFIle reading file requires encoding
readFile("./context/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

//writefile
writeFile(
  "./context/result2-sync.txt",
  `here is the result,${first}, ${second} `,
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  }
);
