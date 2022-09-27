"use strict";
/**
 * Ejercicio 9
 * calcular el factorial de un número
 */
function ejercicio9(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * ejercicio9(num - 1));
    }
}
console.log(ejercicio9(8));
