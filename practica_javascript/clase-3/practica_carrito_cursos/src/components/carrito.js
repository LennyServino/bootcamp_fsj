//declarando el arreglo para guardar los cursos
let arregloCarrito = [];
//
const bodyCarrito = document.querySelector('#lista-carrito tbody');

export function agregarCurso(e) {
    if(e.target.classList.contains('button-carrito')) {
        /* seleccioar los elementos que contenga el boton */

        //Obtener la etiqueta padre del boton
        const cursoSeleccionado = e.target.parentElement.parentElement;
        /* console.log(cursoSeleccionado); */

        //llamamos la funcion para leer los datos del curso
        leerDatosCurso(cursoSeleccionado);
    }

}

//funcion para leer los datos del curso
function leerDatosCurso(curso) {
    //convertir la informacion del curso en un objeto
    const objetoCurso = {
        //clave - valor
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('button').getAttribute('data-id')
    }

    //agregar elementos al arreglo
    arregloCarrito.push(objetoCurso);

    console.log(arregloCarrito);

    //Dibujamos la el tbody con los datos
    carritoHTML();
}

//Iterar el arreglo de los cursos en la tabla html
function carritoHTML() {
    arregloCarrito.map(curso => {
        //creando una fila
        const fila = document.createElement('tr');
        //creando columnas
        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                <a href="#" class="borrar_curso" data-id=${curso.id}>Eliminar</a>
            </td>
        `;

        //insertando las filas en el tbody
        bodyCarrito.appendChild(fila);
    });
}