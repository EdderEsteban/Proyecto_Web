//Carrusel {   
var imagenes = [
    {
        src: "media/Cerro.jpg",
        link: "Htal_Cerro.html"
       
    },
    {
        src: "media/JKoslay.jpg",
        link: "Htal_JKoslay.html",
        
    },
    {
        src: "media/LaPunta.jpg",
        link: "Htal_LaPunta.html"
        
    },
    {
        src: "media/Oeste.jpg",
        link: "Htal_Oeste.html"
       
    },
    {
        src: "media/Sur.jpg",
        link: "Htal_Sur.html"
       
    }
]

var enlace = document.getElementById("enlace");

var title = document.getElementById("titulo");
var picture;
var cont = 0;
//Vinculacion de Js con Html
function Iniciar() {
    picture = document.getElementById("imgcar");
}



//click por derecha
function derecha() {
    if (cont < imagenes.length - 1) {
        picture.src = imagenes[cont +1].src;
       console.log(imagenes[cont+1].titulo)
       
        cont++;
    } else {
        picture.src = imagenes[0].src;
        
        cont = 1;
    }
}
//click por izquierda

function izquierda() {
    if (cont > 0) {
        picture.src = imagenes[cont - 1].src;
        cont--;
    } else {
        picture.src = imagenes[imagenes.length - 1].src;
        cont = imagenes.length - 1;
    }
}

function cambiarEnlace(){
    window.location.href = imagenes[cont].link;
}

