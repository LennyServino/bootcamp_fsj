import Swal from "sweetalert2";

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

        //una vez seleccionado el curso vamos a deshabilitar el boton
        e.target.classList.add('disabled');
        //cambiando el texto del boton
        e.target.textContent = 'Ir al carrito';

        //asignamos una alerta
        Swal.fire({
            icon: "success",
            title: "Agregaste un curso",
            showConfirmButton: false,
            timer: 1500
        });
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

    /* console.log(arregloCarrito); */

    //Dibujamos la el tbody con los datos
    carritoHTML();
}

//funcio calcular el valor total del carrito
function valorCarrito() {
    let total = 0;

    arregloCarrito.map(curso => {
        total += parseFloat(curso.precio.replace('$', ''));
    });

    return total;
}

//Iterar el arreglo de los cursos en la tabla html
function carritoHTML() {
    //resetear el tbody
    bodyCarrito.innerHTML = '';
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

    const filaTotal = document.createElement('tr');
    filaTotal.innerHTML = `
        <td colspan="2"></td>
        <td><strong>Total:</strong></td>
        <td>$${valorCarrito().toFixed(2)}</td>
    `;

    bodyCarrito.appendChild(filaTotal);
}

//funcion para eliminar un curso por ID
export function eliminarCurso(e) {
    if(e.target.classList.contains('borrar_curso')) {
        //obtenemos el data id del curso que selecciono la persona
        const cursoId = e.target.getAttribute('data-id');

        //boton que voy habilitar si se elimina el curso
        const habilitarBoton = document.querySelector(`button[data-id="${cursoId}"]`);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //filtrar los cursos que sean diferente al id seleccionado
                arregloCarrito = arregloCarrito.filter(curso => curso.id !== cursoId);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                
                //condicionamos para habilitar el boton
                if(habilitarBoton) {
                    //removemos la clase disable
                    habilitarBoton.classList.remove('disabled');

                    //Cambiamos el texto
                    habilitarBoton.textContent = 'Agregar a carrito';
                }

                //Una vez filtrado el arreglo, actualizamos la tabla
                carritoHTML();
            }
        });
    }
}

//funcion para vaciar el carrito
export function vaciarCarrito() {
    Swal.fire({
        title: "¿Estás seguro de que deseas vaciar el carrito?",
        text: "Esta acción no se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            //recorrer el arreglo para habilitar botones
            arregloCarrito.map(curso => {
                const cursoID = curso.id;
        
                //boton que voy habilitar si se elimina el curso
                const habilitarBoton = document.querySelector(`button[data-id="${cursoID}"]`);
        
                //condicionamos para habilitar el boton
                if(habilitarBoton) {
                    //removemos la clase disable
                    habilitarBoton.classList.remove('disabled');
        
                    //Cambiamos el texto
                    habilitarBoton.textContent = 'Agregar a carrito';
                }
            });
        
            Swal.fire({
                title: "Eliminado!",
                text: "Tu carrito ha sido eliminado.",
                icon: "success"
            });
            
            //vaciar el arreglo carrito
            arregloCarrito = [];

            //mostrar la tabla carrito vacia
            carritoHTML();
        }
    });
}