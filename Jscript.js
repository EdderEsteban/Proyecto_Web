//Carrusel {   
   var imagenes =[]
    imagenes[0] = "media/Cerro.jpg";
    imagenes[1] = "media/JKoslay.jpg"
    imagenes[2] = "media/LaPunta.jpg";
    imagenes[3] = "media/Oeste.jpg";
    imagenes[4] = "media/Sur.jpg";
   

    var picture;
    var cont=0;

    //click por derecha
    function derecha(){
        if(cont < imagenes.length -1){
            picture.src = imagenes[cont +1];
            cont++;
        }else {
            picture.src = imagenes[0];
            cont = 1;
        }
    }
    //click por izquierda

    function izquierda(){
       if(cont > 0){
            picture.src = imagenes[cont -1];
            cont--;
        }else {
            picture.src = imagenes[imagenes.length -1];
            cont = imagenes.length -1;
        }
    }

      //Vinculacion de Js con Html
    function Iniciar(){
        picture = document.getElementById("imgcar");
    }
 //}---------------------------------------------------------------------------------------------------------------------------------- 
 
