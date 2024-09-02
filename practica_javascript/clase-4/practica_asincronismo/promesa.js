//creamos una nueva promesa
export const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let operacion = true;

        if (operacion) {
            resolve('Operacion exitosa');
        } else {
            reject('Operacion fallido');
        }
    }, 1000);
});

console.log(promise);

//validamos si la promesa se cumple o no se cumple (then / catch)
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})

