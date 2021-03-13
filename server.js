const fs = require("fs");
const http = require("http");


fs.readFile("./index.html", (err,data) => {
  if(err){
    throw err;
  }
  html = data;
})
fs.readFile("./index.js", (err,data) => {
  if(err){
    throw err;
  }
  js = data;
})
fs.readFile("./style.css", (err,data) => {
  if(err) {
    throw err;
  }
  css =data;
})

http.createServer((req,res) =>{
  res.statusCode = 200;
  
  if(req.url.indexOf('.css') != -1){
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(css);
    res.end();
    return;
   }
   if(req.url.indexOf('index.js') != -1){
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(js);
    res.end();
    return;
   }
  
  res.writeHeader(200, {"Content-Type": "text/html"});
  if(req.url.indexOf("/details.html")){
    let detailsHtml;
    fs.readFile("./index_details.html",(err,data) => {
      detailsHtml = data;
      res.write(detailsHtml);
      res.end();
    })
  } else {
    res.write(html);
    res.end();

  } 
  
}).listen(3000);

console.log("server is running on port 3000");
