/* Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */
const readline = require('readline');

let arreglo_numeros = [];

function clasificarNumeros(numeros) {
    let numNegativos = 0;
    let numPositivos = 0;
    let numMultiplos15 = 0;
    let valorAcumuladorPares = 0;

    for (const numero of numeros) {
        if(numero > 0) {
            numPositivos++;

            /* Validar si es multiplo de 15 */
            if(numero % 15 === 0){
                numMultiplos15++;
            }
            
            /* Validar si es numero par */
            if(numero % 2 === 0) {
                valorAcumuladorPares = valorAcumuladorPares + numero;
            }
        } else {
            numNegativos++;
            /* Validar si es multiplo de 15 */
            if(numero % 15 === 0){
                numMultiplos15++;
            }
            
            /* Validar si es numero par */
            if(numero % 2 === 0) {
                valorAcumuladorPares = valorAcumuladorPares + numero;
            }
        }
    }

    console.log('===============================================');
    console.log(`Numeros negativos = ${numNegativos}\nNumeros positivos = ${numPositivos}\nNumeros multiplos de 15 = ${numMultiplos15}\nValor acumulado de pares = ${valorAcumuladorPares}`);
    console.log('===============================================');
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
    for (let i = 0; i < 10; i++) {
        let numero;
        let numeroValido = false;

        while (!numeroValido) {
            numero = await solicitarDatos(`Ingresa el numero ${i + 1}: \n`);
            numero = parseInt(numero, 10);

            if(!isNaN(numero) && numero !== '') {
                arreglo_numeros.push(numero);
                numeroValido = true;
            } else {
                console.log('ERROR: Ingresa un numero valido');
                numeroValido = false;
            }
        }        
    }

    clasificarNumeros(arreglo_numeros);
}

Main();