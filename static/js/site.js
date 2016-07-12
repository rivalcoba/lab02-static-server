function hola(){
    alert("Bienvenido a esta pagina ...");
}

function changeBkgColor(){
    var color = document.body.style.backgroundColor;
    console.log("> Color Original: " +  color);
    if(color == "lightseagreen"){        
        color = "honeydew";
    }else{
        color = "lightseagreen";
    }
    console.log("> Cambiando color a " + color);
    document.body.style.backgroundColor = color;
}
