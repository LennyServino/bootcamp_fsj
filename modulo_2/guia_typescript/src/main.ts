import { CabeceraPagina } from './ejercicios/ejercicio1'
import { Calculadora } from './ejercicios/ejercicio2';
import { Canción } from './ejercicios/ejercicio3';
import { Cuenta } from './ejercicios/ejercicio4';
import { Empleado } from './ejercicios/ejercicio5';
import './style.css'

// Ejemplo de uso ejercicio 1
const cabecera = new CabeceraPagina('Mi Página', 'azul', 'Arial');
cabecera.establecerAlineacion('centrado');
cabecera.imprimirPropiedades();

//Ejemlo de uso ejercicio 2
const calculadora = new Calculadora();
console.log(calculadora.sumar(2, 3));

//Ejemplo de uso ejercicio 3
const cancion = new Canción('The Emptiness Machine', 'Rock alternativo');
cancion.setAutor('Linkin Park');
cancion.mostrarDatosCancion();

//ejemplo de uso ejercicio 4
const cuenta = new Cuenta('Lenny', 100, 'Ahorros', 1234567890);
cuenta.mostrarDatos();
cuenta.depositar(10);
cuenta.retirar(5);

//ejemplo de uso ejercicio 5
const empleado = new Empleado('Lenny', 'Servino', 'Calle 123', 1234567890, 25, 1000);
empleado.mostrarDatos();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`
