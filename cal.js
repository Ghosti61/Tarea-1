function obtenerElemento(id) {
    return document.getElementById(id);
}

function añadir(boton) {
    var pantalla = obtenerElemento("pantalla");
    pantalla.value += boton.innerText;
}

function calcular() {
    var pantalla = obtenerElemento("pantalla");
    try {
        pantalla.value = eval(pantalla.value);
    } catch (e) {
        pantalla.value = "Error";
    }
}

function limpiar() {
    var pantalla = obtenerElemento("pantalla");
    pantalla.value = "";
}
