/* Funciones */
/* 

Hoisting

1.- Funciones Declarativas

function nombreFuncion(params...){
    codigo
}

2.- Funciones de Expresion

const nombreVariable = function(params...){
    codigo
}

3.- Funciones de Flecha (Arrow Functions)

const sumar = (a, b) => a + b;


4.- Funciones Asincronas

async function nombreFuncion(params...){
    codigo
}

const nombreVariable = async () => {
    codigo
}


*/

const resultado = obtenerMayor3Numeros(10, 6, 12);
console.log(resultado)

function obtenerMayor3Numeros(a, b, c){
    if(a > b && a > c){
        return a
    } else if ( b > c) {
        return b
    } else {
        return c
    }
}


const sumar = (a, b) => a + b;

const resultado_1 = sumar(10, 10)
const resultado_2 = sumar(23, 11.5)

console.log(resultado_1)
console.log(resultado_2)


const numeros = [1, 2, 3, 4, 5]

numeros.forEach((value, index, arr) => {
    console.log(value, index, arr)
}) // valor, posicion, arreglo



async function buscarDatos(){
    console.log(this)
}

const obtenerDatos = async () => {
    console.log(this)
}

console.log(this)
buscarDatos()
obtenerDatos()

const persona = {
    nombre: 'John Doe',
    saludar() {
        console.log(this)
        console.log(`Hola, soy ${this.nombre}`)
    }
}

persona.saludar()