"use strict";
/*
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 */
var letters = ["h", "a", "c"];
var numbers = ["7", "4", "17", "10", "48"];
function ejercicio1(letters, numbers) {
    let solucion = letters.concat(numbers);
    return solucion;
}
console.log("Solución Ejercicio 1: " + ejercicio1(letters, numbers));
module.exports = ejercicio1;
//note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
