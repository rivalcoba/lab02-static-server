// Manejadores de rutas virtuales
var fortune = require("./fortune");
var path = require('path');
var fs = require('fs');

var fechaDeNacimiento = new Date(1981,10,22,1,45);

var ivan_rivalcoba = function(req, res){
    res.writeHead(200,{
        "Content-Type" : "application/json"
    });
    // Calculo la edad
    var hoy = new Date();
    var age = 
    Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365))
    // Armando el json
    var objetoRespuesta = {
        "edad" : age
    };
    var jsonResponse = 
    JSON.stringify(objetoRespuesta);
    // Envio la respuesta al cliente
    res.end(jsonResponse); 
};

var _getFortune = function(req, res){
    console.log("> Se solicita fortuna...");
    // // Se obtiene el mensaje de la suerte
    fortune.getFortune(function(fortunePaper){
        // Se configura el encabezado de respuesta
        // HTTP
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        console.log("Contestando: " + fortunePaper);
        // Respondemos el Objeto
        res.end(fortunePaper);
    });
}

// Permite capturar galleta de la fortuna
var _postluck = function(req, res){
    console.log("> Se sirve postluck.html");
    var urlPath = path.resolve('./static/postluck.html');
    console.log(`> Path: ${urlPath}`);
    fs.readFile(urlPath,'utf8',function(err, htmlPage){
        if(err){
            res.writeHead(500,{
                'Content-Type' : 'text/plain'
            });
            res.end("Error en la lecutra de archivo..");
        }
        htmlPage = htmlPage.toString();
        // Lectura de Base de datos
        fortune.getAllFortunes(function(papers){
            console.log(papers);
            for(var i = 0; i < papers.length; i++){
                res.write(`** ${papers[i].message} **\n`);
            };
            res.end("Fin");
        });
    });
};
    
var handler = {};

// Registro de Handlers
handler["/edad/ivan-rivalcoba"] = ivan_rivalcoba;
handler["/getfortune"] = _getFortune;
handler["/postluck.html"] = _postluck;
handler["/postluck"] = _postluck;

module.exports = handler;