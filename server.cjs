const  http = require('http');const fs = require('fs');let js;fs.readFile ('./index.html', function (err , data) {if (err) {throw  err;}html = data;});fs.readFile ('./index.js', function (err , data) {if (err) {throw  err;}js = data;});http.createServer ((req , res) => {res.statusCode = 200;if(req.url.indexOf('index.js') !=  -1){res.writeHead (200, {'Content-Type':'text/javascript'});res.write(js);res.end();return;}res.writeHeader (200, {"Content-Type":"text/html"});res.write(html);res.end();}).listen (8080);