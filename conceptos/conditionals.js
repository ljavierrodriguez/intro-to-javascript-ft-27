/* Conditionals */
/* 

if (condition) {
    codigo
}


if (condition) {
    codigo
} else {
    codigo
}

if (condition) {
    codigo
} else if (condition) {
    cofigo
} else {
    codigo
}

*/

let a = 10
let b = 19
let c = 31


let activo = false


if(!activo){
    console.log("Hola") // Hola
}


if(activo){
    // codigo
} else {
    // codigo
}

if (a > b && a > c){
    console.log("El Mayor es A")
} else if ( b > c){
    console.log("El Mayor es B")
} else {
    console.log("El Mayor es C")
}


let mensaje = activo ? "Abierto" : "Cerrado"
let valor = 4
switch(valor){
    case 1: console.log("Uno")
        break;
    case 2: console.log("Dos")
        break;
    case 1: console.log("Tres")
        break;
}

