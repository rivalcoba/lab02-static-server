function hola(){
    sweetAlert("World Places",
    "¡Bienvenido a esta página!");
    document.body.style.backgroundColor = 
    "lightseagreen";
}

function changeBkgColor(){
    var color = document.body.style.backgroundColor;
    console.log("> Color Original: " + color);    
    if(color == "lightseagreen"){        
        color = "honeydew";
    }else{
        color = "lightseagreen";
    }
    console.log("> Cambiando color a " + color);
    document.body.style.backgroundColor = color;
}
