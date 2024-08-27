import 'bootstrap/dist/css/bootstrap.min.css';
import './public/assets/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { agregarCurso, eliminarCurso, vaciarCarrito } from './src/components/carrito';

//evento de escucha cuando se recarga la pagina
document.addEventListener('DOMContentLoaded', () => {
    //llamando el elemento del main
    const listadoCursos = document.querySelector('#lista-cursos');
    //llamando el elemento table
    const tablaCurso = document.querySelector('#lista-carrito');
    //llamando al boton vaciar carrito
    const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
    //alojar todos los eventos para el carrito
    /*
     * Mandamos un evento de escucha al contenido del main, cuando la persona le de click se ejecuta la funcion 'agregarCurso'    
    */
    listadoCursos.addEventListener('click', agregarCurso);

    //evento de escucha para ejecutar eliminar curso
    tablaCurso.addEventListener('click', eliminarCurso);

    //evento para ejecutar vaciar carrito
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
});