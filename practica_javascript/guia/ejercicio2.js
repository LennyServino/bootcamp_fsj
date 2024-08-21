/*  Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */
function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    console.log("============================================================");
    console.log(`Nombre: ${nombre}`);
    console.log(`Carnet: ${carnet}`);
    console.log(`Nota Final: ${notaFinal.toFixed(2)}`);
    console.log("============================================================");
}

const alumno = {
    nombre: 'Lenny Servino',
    carnet: '2024-001',
    examen: 9,
    tareas: 9.5,
    asistencia: 10,
    investigacion: 9.5
};

calcularNotaFinal(alumno.nombre, alumno.carnet, alumno.examen, alumno.tareas, alumno.asistencia, alumno.investigacion);