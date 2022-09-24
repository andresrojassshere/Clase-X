"use strict";
/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */
let numeros = [2, 4, 6, 5, 3, 7];
let numerospares = [];
let numerosimpares = [];
const ejercicio2 = [numerospares, numerosimpares];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerospares.push(numeros[i]);
    }
    else {
        numerosimpares.push(numeros[i]);
    }
}
console.log(ejercicio2);
module.exports = ejercicio2;
