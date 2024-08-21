/* Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. */
const readline = require('readline');

function calcularMayor(num1, num2) {
    let numMayor = num1 > num2 ? num1 : num2;
    return numMayor;
}

function solicitarDatos(datos) {
    const leer = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => leer.question(datos, respuesta => {
        leer.close();
        resolve(respuesta);
    }));
}

async function Main() {
    let num1 = await solicitarDatos('Ingrese el primer número: \n');
    let num2 = await solicitarDatos('Ingrese el segundo número: \n');

    if(isNaN(num1) || isNaN(num2)) {
        console.log('Error: Ingrese numeros validos');
    } else {
        console.log(`El numero mayor es --> ${calcularMayor(num1, num2)}`);
    }
}

Main();