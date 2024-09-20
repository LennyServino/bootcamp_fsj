//clase base
class Persona {
    //atributos
    nombre: string;
    apellido: string;
    correo: string;
    protected password: string;
    private dui: string | number;

    //metodos en comun
    constructor(nombre: string, apellido: string, correo: string, pass: string, dui: string | number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.password = pass;
        this.dui = dui;
    }

    getDui() {
        return this.dui;
    }

    setDui(dui: string | number) {
        this.dui = dui
    }

    verPerfil() {
        //code...
        console.log(`Datos personales: Nombre Completo ${this.nombre} ${this.apellido}`);
        
    }
}

//clases hijas
export class Coach extends Persona {
    //atributos exclusivos para el couch
    bootcamp: string;

    constructor(nombre: string, apellido: string, correo: string, pass: string, dui: string | number, bootcamp: string) {
        //reutilizar codigo
        //heredar el constructor padre
        super(nombre, apellido, correo, pass, dui);
        this.bootcamp = bootcamp;
    }

    //cambiar comportamiento de un metodo de la clase padre
    verPerfil(): void {
        console.log(`Coach: ${this.nombre} ${this.apellido}, Bootcamp: ${this.bootcamp}`);
    }
}

//Polimorfismo (el polimorfismo existe solo cuando tenemos herencia)


/* //crear couch
let couch = new Coach('Oscar', 'Lemus', 'oscar@gmail.com', 'oscar123', '4521589', 'fsj24');
couch.getDui();
couch.verPerfil();
console.log(couch); */
