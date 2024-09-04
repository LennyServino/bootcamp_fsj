import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import sintaxisTS from './sintaxis';
import { Estudiante } from './clases';

//llamando a la funcion de sintaxis
sintaxisTS();

//instanciar el objeto
let estudiante1 = new Estudiante('Lenny', 'Servino', 'lenny@gmail.com', 'sds456', 'pass123', 'fsj24');
console.log(estudiante1);
estudiante1.saludar();

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
