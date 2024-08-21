/* Declaracion de variables y constantes */
/*
    let
    const
    var
*/

/* Elabore un algoritmo para una tienda de café que tenga una promoción de descuento para vender al por mayor, 
esto dependerá del número de café que compre las personas, si son más o igual de 5 café pero menor o igual a 10 tendrán un 20% de descuento, 
si compra más de 10 pero menor o igual a 20 tendrán un 40% de descuento, si compra más de 20 tendrá el 50% de descuento.

Nota: El precio del café es de $25.00 */

function calcularDescuento(cantidadCompra) {
    const precioCafe = 25;
    let descuento = 0;
    let total = cantidadCompra * precioCafe;
    let precioFinal = 0;

    if(cantidadCompra >= 5 && cantidadCompra <= 10) {
        descuento = total * 0.2;
        precioFinal = total - descuento;
        console.log('El valor de su compra es $',precioFinal, ' con un descuento del 20% con valor de $', descuento);
    } else if(cantidadCompra > 10 && cantidadCompra <= 20) {
        descuento = total * 0.4;
        precioFinal = total - descuento;
        console.log('El valor de su compra es $',precioFinal, ' con un descuento del 40% con valor de $', descuento);
    } else if(cantidadCompra > 20) {
        descuento = total * 0.5;
        precioFinal = total - descuento;
        console.log('El valor de su compra es $',precioFinal, ' con un descuento del 50% con valor de $', descuento);
    }
}


function juegoAdivinanza(num) {
    let numRandom = Math.floor(Math.random() * 10) + 1;

    console.log("El numero ingresado es -->", num, "<--");

    if(num > 10 || num <  1) {
        console.log("ERROR: debe ingresar un numero del 1 al 10");
    } else {
        if(num > numRandom) {
            console.log("El numero ingresado es mayor al numero random");
        } else if(num < numRandom) {
            console.log("El numero ingresado es menor al numero random ");
        } else {
            console.log("Adivinaste el numero random", numRandom);
        }
    }
}
