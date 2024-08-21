function sintaxis() {
    /* Traer un solo elemento */
    const title = document.getElementById('app-title');
    const title2 = document.querySelector('#app-title');
    const menu = document.querySelector('menu');
    
    /* Traer varios elementos */
    const items = document.getElementsByClassName('menu-items');
    const tags = document.getElementsByTagName('li');
    //console.log('ETIQUETAS DEL NAVEGADOR', tags);
    const items2 = document.querySelectorAll('.menu-items');
    
    const parent = document.getElementById('parent');
    /* ver hijos de la etiqueta */
    console.log(parent.children);
    
    const children = parent.children;
    console.log(children);
    /* Acceder al primer y ultimo elemento hijo */
    console.log(parent.firstElementChild);
    console.log(parent.lastElementChild);
}

function agregarEstilos() {
    const header = document.querySelector('header');
    const title = document.getElementById('app-title');
    title.textContent = 'Hola desde la clase FSJ24';
    /* title.innerText = 'Hola!!'; */
    
    /*🔴 Mala practica */
    /* title.style.color = 'red';
    header.style.backgroundColor ='yellow'; */
    
    /*🟢 Buenas practicas */
    title.classList.add('title');
    /* title.className = 'title'; */
}

const subtitle = document.getElementById('app-subtitle');
function toggleSubtitle() {
    /* SOLUCION 1 */
    /* subtitle.classList.toggle('invisible'); */

    /* SOLUCION 2 */
    if(subtitle.classList.contains('invisible')) {
        subtitle.classList.remove('invisible');
    } else {
        subtitle.classList.add('invisible');
    }
}

/* LIBRERIA DE CONFETI */
function fireConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

/* INSERTAR HTML */
function insertarHTML() {
    const about = document.getElementById('app-about');
    about.insertAdjacentHTML('beforeend', '<p>Hola como estas?</p>');
    about.insertAdjacentHTML('beforeend', '<h1>Hola como estas?</h1>');
}

