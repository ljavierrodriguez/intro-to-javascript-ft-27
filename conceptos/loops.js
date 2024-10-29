/* Loops */
/* 

1.- For loop

for (inicializador; condicion; incremento){
    codigo
}

2.- While loop

while (condicion) {
    codigo
}

3.- Do While

do {
    codigo
} while (condicion)

4.- For In

for (indice in arreglo){
    codigo
}

5.- For Of

for (value of arreglo){
    codigo
}



6.- Array.prototype.forEach


*/
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let nombres = ["Camila", "Jhoan", "Angel", "Dafne", "Martin", "Leonardo"]
let persona = {
    nombre: 'John',
    apellido: 'Doe',
    edad: 'Unknown'
}
console.log("------------------------- For -------------------------")
for (let numero = 1; numero <= 10; numero++){
    console.log(numero)
}

for (let indice = 0; indice < nombres.length; indice++){
    console.log(nombres[indice])
}

console.log("------------------------- While -------------------------")

let numero = 1;
while (numero <= 10){
    console.log(numero)
    numero++
}

let indice = 0;
while (indice < nombres.length){
    console.log(nombres[indice])
    indice++
}

console.log("------------------------- Do While -------------------------")

numero = 1;
do {
    console.log(numero)
    numero++
} while (numero <= 10)

console.log("------------------------- For In -------------------------")
for (let indice in nombres){
    console.log(indice)
    console.log(nombres[indice])
}

for (let key in persona){
    console.log(key)
    console.log(persona[key])
}

console.log("------------------------- For Of -------------------------")

for (let nombre of nombres){
    console.log(nombre)
}


console.log("------------------------- Array.prototype -------------------------")

function obtenerForEach(valor, indice, arreglo){
    console.log(`Consegui ${valor} en la posicion ${indice} en el arreglo [${arreglo}]`)
}

nombres.forEach(obtenerForEach)

let total = 0;
for (let i = 0; i < numeros.length; i++){
    total+=numeros[i]
}
console.log('El total es: ', total)

let total2 = numeros.reduce((total, value) => total + value, 0)
console.log('El total es: ', total2)