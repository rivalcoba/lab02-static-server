// 1. Cargando el Driver de Mongodb que
// me permitira conectarme a la base de datos
var mongodb = require("mongodb");
// 2. Cargo al cliente de driver
var mongoClient = mongodb.MongoClient;

module.exports = {
    "getFortune" : function(cb){
        // Conectando el cliente a la base de datos fortune
        mongoClient.connect("mongodb://127.0.0.1:27017/fortune",
        function(err, db){
            if(err){
                console.log("> ERROR al conectarse a" +
                " la base de datos:"+
                " mongodb://127.0.0.1:27017/fortune");
                var fortunePaper = {
                    "message":
                    "La honestidad es un regalo caro, no lo esperes de gente barata"
                };
                // Convirtiendo el fortunePaper de objeto
                // a su version en string
                var fortunePaperResponse = JSON.stringify(fortunePaper);
                
                // Ejecuto el callback (cb) pasandole
                // como parametro el fortunepaper string
                cb(fortunePaperResponse);
            }else{
                // Obtengo la coleccion con la que quiero trabajar
                var papersCollection = 
                db.collection("papers");
                
                // Consulto todos los documentos de mi coleccion
                var objetoRestultado = 
                papersCollection.find({});

                // Parseo el objeto resultado en un arreglo
                objetoRestultado.toArray(function(err, papers){
                    var fortunePaperResponse = 
                    JSON.stringify(papers[0]);
                    // Cerrar la conexion entre el cliente
                    // y la base de datos
                    db.close()
                    // Invoco al cb pasandole como parametro
                    // la respuesta
                    console.log("> La fortuna es: " + fortunePaperResponse);
                    cb(fortunePaperResponse);
                });
            }
        });
    }
};