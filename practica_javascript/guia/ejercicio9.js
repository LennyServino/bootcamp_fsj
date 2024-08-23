/* Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
 */
const readline = require('readline');

function temperaturaFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;

    if(fahrenheit >= 14 && fahrenheit <= 32) {
        return "Temperatura baja";
    } else if(fahrenheit > 32 && fahrenheit <= 68) {
        return "Temperatura adecuada";
    } else if(fahrenheit > 68 && fahrenheit <= 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

function solicitarDato(dato) {
    const leer = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => leer.question(dato, respuesta => {
        leer.close();
        resolve(respuesta);
    }));
}

async function Main() {
    let resultado;
    let celsius = await solicitarDato("Introduce temperatura en Celsius: ");

    if(!isNaN(celsius) && celsius !== '') {
        resultado = temperaturaFahrenheit(parseFloat(celsius));
        console.log(`--> ${resultado} <--`);
    } else {
        console.log(`--> ERROR: Debe ingresar un valor numerico <--`);
    }
}

Main();