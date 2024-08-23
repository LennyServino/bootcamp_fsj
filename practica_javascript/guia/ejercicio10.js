const estudiantes = {
    manana: 5,
    tarde: 6,
    noche: 11
}

document.addEventListener('DOMContentLoaded', () => {
    const formManana = document.getElementById('form-matutino');
    const formTarde = document.getElementById('form-tarde');
    const formNoche = document.getElementById('form-noche');
    
    /* Inputs de estudiantes por la mañana */
    for (let estudiantesManana = 1; estudiantesManana <= estudiantes.manana; estudiantesManana++) {
        formManana.insertAdjacentHTML('beforeend', `
            <div class="mb-3">
                <label for="edadManana${estudiantesManana}" class="form-label">Edad del estudiante ${estudiantesManana}:</label>
                <input type="number" class="form-control" id="edadManana${estudiantesManana}" required>
            </div>
        `);
    }

    /* Inputs de estidiantes por la tarde */
    for (let estudiantesTarde = 1; estudiantesTarde <= estudiantes.tarde; estudiantesTarde++) {
        formTarde.insertAdjacentHTML('beforeend', `
            <div class="mb-3">
                <label for="edadTarde${estudiantesTarde}" class="form-label">Edad del estudiante ${estudiantesTarde}:</label>
                <input type="number" class="form-control" id="edadTarde${estudiantesTarde}" required>
            </div>
        `);
    }

    /* Inputs de estidiantes por la noche */
    for (let estudianteNoche = 1; estudianteNoche <= estudiantes.noche; estudianteNoche++) {
        formNoche.insertAdjacentHTML('beforeend', `
            <div class="mb-3">
                <label for="edadNoche${estudianteNoche}" class="form-label">Edad del estudiante ${estudianteNoche}:</label>
                <input type="number" class="form-control" id="edadNoche${estudianteNoche}" required>
            </div>
        `);
    }
});

function calcularPromedios() {
    // Obtener las edades del turno mañana
    let edadesManana = [
        document.getElementById('edadManana1').value,
        document.getElementById('edadManana2').value,
        document.getElementById('edadManana3').value,
        document.getElementById('edadManana4').value,
        document.getElementById('edadManana5').value
    ];

    // Obtener las edades del turno tarde
    let edadesTarde = [
        document.getElementById('edadTarde1').value,
        document.getElementById('edadTarde2').value,
        document.getElementById('edadTarde3').value,
        document.getElementById('edadTarde4').value,
        document.getElementById('edadTarde5').value,
        document.getElementById('edadTarde6').value
    ];

    // Obtener las edades del turno noche
    let edadesNoche = [
        document.getElementById('edadNoche1').value,
        document.getElementById('edadNoche2').value,
        document.getElementById('edadNoche3').value,
        document.getElementById('edadNoche4').value,
        document.getElementById('edadNoche5').value,
        document.getElementById('edadNoche6').value,
        document.getElementById('edadNoche7').value,
        document.getElementById('edadNoche8').value,
        document.getElementById('edadNoche9').value,
        document.getElementById('edadNoche10').value,
        document.getElementById('edadNoche11').value
    ];

    // Validar que no haya campos vacíos
    if (edadesManana.includes('') || edadesTarde.includes('') || edadesNoche.includes('')) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Convertir los valores a números enteros
    edadesManana = edadesManana.map(Number);
    edadesTarde = edadesTarde.map(Number);
    edadesNoche = edadesNoche.map(Number);

    // Calcular los promedios
    let promedioManana = calcularPromedio(edadesManana);
    let promedioTarde = calcularPromedio(edadesTarde);
    let promedioNoche = calcularPromedio(edadesNoche);

    // Mostrar los resultados
    let resultados = `
        Promedio de edades del turno mañana: ${promedioManana}<br>
        Promedio de edades del turno tarde: ${promedioTarde}<br>
        Promedio de edades del turno noche: ${promedioNoche}
    `;

    // Determinar el turno con el mayor promedio
    let mensaje;
    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
        mensaje = 'El turno mañana tiene el promedio de edades mayor.';
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
        mensaje = 'El turno tarde tiene el promedio de edades mayor.';
    } else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
        mensaje = 'El turno noche tiene el promedio de edades mayor.';
    } else {
        mensaje = 'Hay turnos con promedios iguales.';
    }

    resultados += `<br>${mensaje}`;
    document.getElementById('resultados').innerHTML = resultados;
}

function calcularPromedio(edades) {
    let sumaEdades = 0;

    for (const edad of edades) {
        sumaEdades = sumaEdades + edad;
    }

    return sumaEdades / edades.length;
}
