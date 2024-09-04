export class Estudiante {
    //crear la plantilla
    //atributos

    //3 formas de acceso
    /* 
        public: (acceso dentro de la clase, fuera de la clase y clases hijas)

        protected: (acceso dentro de la clase y clases hijas)

        private: (acceso dentro de la clase)
    */
    nombre: string;
    apellido: string;
    correo: string;
    carnet: string;
    private password: string;
    bootcamp: string;
    rol: string;

    //constructor() => inicializar un objeto
    constructor(nombre: string, apellido: string, correo: string, carnet: string, pass: string, bootcamp: string) {
        //tenemos informacion estatica
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.carnet = carnet;
        this.password = pass;
        this.bootcamp = bootcamp;
        this.rol = 'Estudiante';
    }


    //metodos
    saludar() {
        console.log(`Hola me llamo ${this.nombre} y soy estudiante de Kodigo`);
        
    }

    //get y set
    getPassword() {
        return this.password;
    }


    //capturamos el password
    setPassword(password: string) {
        //password no pase de los 8 caracteres
        if (password.length > 8) {
            //personalizar un error
            throw new Error('Tu password debe tener como maximo 8 caracteres');         
        }
        this.password = password;
    }
}

//crear objets a partir de una clase
//instanciar la clase
/* let estudiante1 = new Estudiante('Lenny', 'Servino', 'lenny@gmail.com', 'sds456', 'pass123', 'fsj24');
estudiante1.saludar(); */