const { createServer } = require("http");

//*****HTTP_BASICS*******/
// createServer(function (req, res) {
//   res.write("hello there from node server");
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end();
// }).listen(8000);

//******  another way of creating server ***** */
const server = createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.write("Home page, Hi form node server");
    res.end();
  }
  if (req.url === "/about") {
    res.write("About page, Hi form node server");
    res.end();
  }
  res.end(`<h1>OPPS ERROR..</h1>
  <p>page your are looking for not found </P>
  <a href='/'>go back home </a>
  `)
});
server.listen(3000);
