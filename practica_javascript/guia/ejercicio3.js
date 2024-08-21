/* Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
*/
const readline = require('readline');

let nombre = '', categoria = '';
let salario = 0, aumento = 0;

function aumentoSalarial(categoria, salario) {
    switch (categoria) {
        case 'A':
            aumento = salario * 0.15;
        break;
        case 'B':
            aumento = salario * 0.3;
        break;
        case 'C':
            aumento = salario * 0.1;
        break;
        case 'D':
            aumento = salario * 0.2;
        break;
    }

    return aumento;
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
    let categoriaValida = false;

    nombre = await solicitarDatos('Ingrese el nombre del trabajador: \n');
    salario = await solicitarDatos('Ingrese el salario del trabajador: \n');

    do {
        categoria = await solicitarDatos('Ingrese la categoría del trabajador (A, B, C, D): \n');
        categoria = categoria.toUpperCase();
        if (categoria === 'A' || categoria === 'B' || categoria === 'C' || categoria === "D") {
            categoriaValida = true;
        } else {
            console.log('--> ERROR: Categoría inválida. Por favor, ingrese una categoría válida <--');
        }
    } while (!categoriaValida);

    console.log('========================================================');
    console.log(`Nombre del trabajador: ${nombre}`);
    console.log(`Salario del trabajador: $${salario}`);
    console.log(`Categoría del trabajador: ${categoria}`);
    console.log(`Aumento salarial: $${aumentoSalarial(categoria, salario)}`);
    console.log('========================================================');
}

Main();