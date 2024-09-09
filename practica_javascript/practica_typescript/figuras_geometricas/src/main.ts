import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import './style.css'
import { Circulo } from './circulo'
import { Triangulo } from './triangulo'

let triangulo = new Triangulo(20, 34);
triangulo.calcularArea();

let circulo = new Circulo(25);
circulo.calcularArea();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`


