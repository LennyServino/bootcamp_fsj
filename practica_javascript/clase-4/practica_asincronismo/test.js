//Manejo de errores
export function dividir(a, b) {
    //validamos si el segundo numero no sea cero
    if(b == 0) {
        throw new Error('Division por cero no es permitida');
    }

    return a / b;
}

//Uso de manejo de errores
export function convertirNumero(str) {
    //si la cadena es un numero lo imprimimos pero sino es numero vamos a enviar un error
    try {
        let numero = Number(str);
        if(isNaN(numero)) { //si es true no es un numero
            throw new Error('No es un numero');
        }

        return numero;
    } catch (error) {
        return error.message;
    }
}