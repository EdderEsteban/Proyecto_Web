console.log("Scrip Cargada")

var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var mensaje = document.getElementById("mensaje");
var errorMensaje = document.getElementsByClassName("error");
var correctoIco = document.getElementsByClassName("success-icon");
var incorrectoIco = document.getElementsByClassName("failure-icon");
var bolsita = [];
var regularMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var resultado = document.getElementById("resultado");

formulario.onsubmit = () => onSubmit()

function onSubmit(){
  
    //Json!!!!!!
    datos = {
        nombre: nombre.value,
        correo: correo.value,
        mensaje: mensaje.value,
    }
    if(validar()){
        bolsita.push(datos)
        console.log(bolsita)
        verDatos()
        formulario.reset()
    }
    return false;
}

function validar(){
   
    let cont = 0;
    if(datos.nombre != ""){
        correcto(nombre, 0);
        cont++;
    }else{
        error(nombre, 0);
        nombre.focus();
    }
    if(regularMail.test(datos.correo)){ 
        correcto(correo, 1);
        cont++;
    }else{
        error(correo, 1);
        correo.focus();
    }
    if(datos.mensaje != ""){
        correcto(mensaje, 2);
        cont++;
        }else{
        error(mensaje, 2);
        mensaje.focus();
    }
    if(cont == 3){
        return true;
    }else{
        return false;
    }
}

function correcto(elemento, posicion){
    elemento.classList.remove("bordeRojo")
    incorrectoIco[posicion].classList.remove("mostrarIco");
    elemento.classList.add("bordeVerde");
    correctoIco[posicion].classList.add("mostrarIco")
    errorMensaje[posicion].innerHTML = "";
    
}

function error(elemento, posicion){
    elemento.classList.add("bordeRojo");
    incorrectoIco[posicion].classList.add("mostrarIco");
    correctoIco[posicion].classList.remove("mostrarIco")
    if(posicion==0){
        errorMensaje[posicion].innerHTML = "Falta el Nombre";
    }else if (posicion == 1){
        errorMensaje[posicion].innerHTML = "Falta el Correo";
    }else{
        errorMensaje[posicion].innerHTML = "Falta el Mensaje";
    }
}
function verDatos(){
     //limpia el appendChild
     resultado.innerHTML = ""
     let dat;
     bolsita.forEach(aux=>{
     dat = document.createElement("div")
     dat.className = "resultado1"
     dat.innerHTML = "<p>"+"Gracias "+aux.nombre + " . Nos pondremos a la brevedad en contacto con usted al Correo: "+ aux.correo +"</p>"
     resultado.appendChild(dat)
     })
}