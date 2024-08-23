/* Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
*/
const readline = require('readline');

function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

function solicitarNumero(numero) {
    const leer = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => leer.question(numero, respuesta => {
        leer.close();
        resolve(respuesta);
    }));
}

async function Main() {
    const numero = await solicitarNumero('Ingrese un número para generar la tabla de multiplicar: ');

    if(!isNaN(numero) && numero !== '') {
        tablaMultiplicar(numero);
    } else {
        console.log(`--> ERROR: Debe ingresar un valor numerico <--`);
    }
}

Main();