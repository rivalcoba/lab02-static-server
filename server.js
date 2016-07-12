// http
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
var staticServer = require('./internals/static-server');
// Obteniendo las configuraciones
// del modulo de configuracion
var PORT = config.PORT;
var IP = config.IP;
if(IP == '127.0.0.1'){
    console.log("> ---- EJECUTANDO EN MODO LOCAL ----");
}
// Crear un servidor basico
var server = http.createServer(function (req, res) {
    //obtener la url del archivo 
    //de la peticion le asigno una variable url
    var url = req.url;
    //sirvo la url con mi server statico
    staticServer.serve(url, res);
});
// Poner a trabjar al server
server.listen(PORT,IP,function(){
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
});