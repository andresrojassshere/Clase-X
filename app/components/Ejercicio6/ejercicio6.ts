/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */

 let letras = ["b", "6", "a", "q", "7", "2"];

 function ejercicio6(ordenar:any) {
    ordenar.sort()
    return ordenar
 } 

console.log(ejercicio6(letras));
module.exports = ejercicio6;
