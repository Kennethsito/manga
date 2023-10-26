let express = require('express');
let app = express();

app.use(express.static('bootstrap'));

let server = app.listen(8081);
//http.createServer(function(req, res){
  //  res.end("hola");
//}).listen(8080);