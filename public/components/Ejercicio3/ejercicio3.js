"use strict";
/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 */
let grupoletras1 = ["e", "d", "f"];
let grupoletras2 = ["a", "c", "b"];
let grupoletras3 = ["g", "h", "i"];
let organizarletras1 = grupoletras1.sort();
let organizarletras2 = grupoletras2.sort();
let organizarletras3 = grupoletras3.sort();
function ejercicio3(letrass) {
    return ordenar = letrass.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    });
}
ejercicio3(grupoletras1);
ejercicio3(grupoletras2);
ejercicio3(grupoletras3);
let grupoletras4 = [grupoletras2, grupoletras1, grupoletras3];
console.log(grupoletras4);
module.exports = ejercicio3;
