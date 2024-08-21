/* Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%. */
const readline = require('readline');

function calcularDescuento(destino) {
    let descuento;
    const descuentos = {
        '1': { destino: 'La costa del Sol', descuento: 5 },
        '2': { destino: 'Panchimalco', descuento: 10 },
        '3': { destino: 'Puerto el Triunfo', descuento: 15 }
    };
    
    return descuento = descuentos[destino];
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
    let datosDestino;
    console.log('**************** DESTINOS DISPONIBLES ******************');
    console.log(' 1: La Costa del Sol\n 2: Panchimalco\n 3: Puerto el Triunfo');
    console.log('********************************************************');
    let destino = await solicitarDatos('Ingrese la ciudad de destino: ');

    if(isNaN(destino) || destino < 1 || destino > 3) {
        console.log('Error: La ciudad de destino debe ser un número de la lista de destinos.');
    } else {
        datosDestino = calcularDescuento(destino);
        console.log('======================================================');
        console.log('Origen: Ciudad de Palma');
        console.log(`Destino: ${datosDestino.destino}`);
        console.log(`Descuento: ${datosDestino.descuento}%`);
        console.log('======================================================');
    }

}

Main();