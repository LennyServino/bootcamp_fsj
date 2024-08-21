/*  Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario. */
function esMayorDeEdad(edad) {
    return edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingresa tu edad: ', edad => {
    console.log(esMayorDeEdad(parseInt(edad)));
    readline.close();
});