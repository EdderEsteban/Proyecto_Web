console.log("Scrip Cargada")

var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var mensaje = document.getElementById("mensaje");
var errorMensaje = document.getElementsByClassName("error");
var correctoIco = document.getElementsByClassName("success-icon");
var incorrectoIco = document.getElementsByClassName("failure-icon");
var bolsita = [];

//
//errorMensaje[1].innerHTML = "Falta el Correo";
//errorMensaje[2].innerHTML = "Falta el Mensaje";

formulario.onsubmit = () => onSubmit()

function onSubmit(){
    console.log("submit");
    //Json!!!!!!
    datos = {
        nombre: nombre.value,
        correo: correo.value,
        mensaje: mensaje.value,
    }
    if(validar()){
        bolsita.push(datos)
        console.log(bolsita)
        formulario.reset()
    }
    return false;
}

function validar(){
    console.log("adentro validar")
    let cont = 0;
    if(datos.nombre != ""){
        correcto(nombre, 0);
        cont++;
    }else{
        error(nombre, 0);
        nombre.focus;
    }
    if(datos.correo != ""){
        correcto(correo, 1);
        cont++;
    }else{
        error(correo, 1);
        correo.focus;
    }
    if(datos.mensaje != ""){
        correcto(mensaje, 2);
        cont++;
        }else{
        error(mensaje, 2);
        mensaje.focus;
    }
    if(cont == 3){
        return true;
    }else{
        return false;
    }
}

function correcto(aux, posicion){
    aux.style.border = "2px solid green";
    incorrectoIco[posicion].style.opacity = "0";
    correctoIco[posicion].style.opacity = "1";
    errorMensaje[posicion].innerHTML = "";
    console.log("lleno");
}

function error(aux, posicion){
    aux.style.border = "2px solid red";
    incorrectoIco[posicion].style.opacity = "1";
    correctoIco[posicion].style.opacity = "0";
    errorMensaje[posicion].innerHTML = "Falta el Nombre";
    console.log("vacio");
}