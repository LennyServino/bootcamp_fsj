/* En base al siguiente arreglo de notas [7,8,6.5,5,4,9,8.2]
 - Obtener cuantos alumnos aprobaron (para aprobar la nota debe ser mayor o igual a 7)
 - Obtener cuantos alumnos estan en recuperacion (deben tener una nota entre 5 y 6.9)
 - Obtener cuantos alumnos reprobaron */

function notasEstudiantes() {
    let notas_array = [7,8,6.5,5,4,9,8.2];
    let aprobados = 0;
    let recuperacion = 0;
    let reprobados = 0;

    for (const notas of notas_array) {
        if(notas >= 7) {
            aprobados++;
        } else if(notas >=5 && notas < 6.9) {
            recuperacion++;
        } else {
            reprobados++;
        }
    }

    console.log("Alumnos aprobados --> "+aprobados);
    console.log("Alumnos en recuperacion --> "+recuperacion);
    console.log("Alumnos reprobados --> "+reprobados);
}

notasEstudiantes();