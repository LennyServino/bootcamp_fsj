import logger from "./logger";
import { promise } from "./promesa";
import { PI, saludo } from "./public/operaciones";
import { dividir, convertirNumero } from "./test";

console.log(PI);
//console.log(logger('Hola dede una exportacion predeterminada'));
console.log(logger);
console.log(saludo);

console.log(dividir(10, 5));
//validando el resultado de la division
try {
  let resultado = dividir(10, 0);
  console.log('Resultado: ',resultado);
} catch (error) {
  console.log('Ocurrio un error: ', error.message);
}

console.log(convertirNumero('100b'));