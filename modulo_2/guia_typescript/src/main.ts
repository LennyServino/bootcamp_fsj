import { CabeceraPagina } from './ejercicios/ejercicio1'
import { Calculadora } from './ejercicios/ejercicio2';
import { Canción } from './ejercicios/ejercicio3';
import './style.css'

// Ejemplo de uso ejercicio 1
const cabecera = new CabeceraPagina('Mi Página', 'azul', 'Arial');
cabecera.establecerAlineacion('centrado');
cabecera.imprimirPropiedades();

//Ejemlo de uso ejercicio 2
const calculadora = new Calculadora();
console.log(calculadora.sumar(2, 3));

//Ejemplo de uso ejercicio 3
const cancion = new Canción('La vida es un carnaval', 'Salsa');
cancion.setAutor('Celia Cruz');
cancion.mostrarDatosCancion();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`
