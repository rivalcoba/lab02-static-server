var fortunePaper = {
    "mensaje":
    "La honestidad es un regalo caro, no lo esperes de gente barata"
};
module.exports = {
    "getFortune" : function(cb){
        // Convirtiendo el fortunePaper de objeto
        // a su version en string
        var fortunePaperResponse = JSON.stringify(fortunePaper);
        // Ejecuto el callback (cb) pasandole
        // como parametro el fortunepaper string
        cb(fortunePaperResponse);
    }
};