export default function sintaxis() {
    //declaracion de variables y constantes
    let nombre: string = 'Lenny';
    let edad: number = 24;
    let decimal: number = 105.67;
    let estudiante: boolean = true;
    let nulo: null = null;

    //variable que reciba mas de un tipo de dato
    let valor: number | string;
    valor = "Hola";
    console.log(`valor: ${valor}, Tipo de dato: ${typeof(valor)}`);
    valor = 54;
    console.log(`valor: ${valor}, Tipo de dato: ${typeof(valor)}`);

    //variable que puede devolver cualquier tipo de dato
    let dato: any;
    dato = true;
    console.log(dato);

    //ARREGLOS, OBJETOS, INTERFACES
    //declarando un arreglo
    let frutas: string[] = ['fresa', 'manzana', 'pera', 'uva'];
    console.log(frutas);
    
    //clave y valor (declarando un objeto)
    let persona: object = {
        nombre: 'Lenny',
        apellido: 'Servino',
        telefono: 7679,
        hobbies: ['ver tv', 'leer', 'video juegos']
    }
    console.log(persona);
    
    //INTERFACES /Tuplas
    //Tuplas (condiciones, longitud predeterminada)
    let coordenadas: [number, number] = [12.45, 45.33];
    
    let persona1: object = {
        nombre: 'Alexander',
    }

    //Interfaces: declarando objetos
    interface Persona {
        //declarar estructura de mi objeto
        nombre: string;
        apellido: string;
        telefono: number;
        correo: string;    
        saludar(): string;
    }
    //declaramos la estructura de la interfaz para cada objeto
    let juan: Persona = {
        nombre: 'Juan',
        apellido: 'Perez',
        telefono: 1234,
        correo: 'juan@gmail.com',
        saludar() {
            return 'Hola soy Juan, buenas noches';
        }
    }
}