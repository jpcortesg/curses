const http = require('http')
const colors = require('colors')

const handleServer = function(rec, res){
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('<h1>Hello world</h1>')
  res.end()
} 

// req -> petición, res -> respuesta
const server = http.createServer(handleServer)
server.listen(3000, function(){
  console.log('Server on port 3000'.green);
})