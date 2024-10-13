import React from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/Form.module.css'
import { v4 as uuidv4 } from 'uuid'

export default function FormHook({listNotes, setListNotes}) {
    /*
        register = guarda la data (la entrada de cada input)
        handleSubmit = accion de lo que vamos hacer
        watch = testeamos lo que se va guardando en cad input (en consola)
        formState: { errors } = maneja los errores
    */

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    //podemos ver el cambio en la entrada de datos del title
    console.log('testeando el titulo: ', watch('title'));

    //funcion para guardar los daros de la nota
    const registerNote = (data) => {
        console.log(data);
        //spread operator (...) hacemos una copia del arreglo y guardamos el arreglo
        setListNotes([...listNotes, {
            id: uuidv4(),
            title: data.title,
            description: data.description
        }])

        //resetear la entrada de datos
        reset()
    }

    /* register guarda un objeto en base a los inputs de entrada */
    
    return (
        <div>
            <form action="" onSubmit={handleSubmit(registerNote)} className='form_data'>
                <div>
                    <input type="text" className={styles.input} placeholder='ingresa un titulo' {...register("title", {required: true})}/>
                </div>
                {errors.title && <span className={styles.error}>Este campo es requerido</span>}
                <div>
                    <textarea className={styles.input} placeholder='descripcion...' {...register("description", {required: true})}></textarea>
                </div>
                {errors.description && <span className={styles.error}>Este campo es requerido</span>}

                <input type="submit" value="Guardar Nota" className={styles.btn}/>
            </form>
        </div>
    )
}

