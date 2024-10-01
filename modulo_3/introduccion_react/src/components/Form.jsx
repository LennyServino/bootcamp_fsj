import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from '../styles/Form.module.css'

export default function Form({listNotes, setListNotes}) {
    /*
        useState = maneja los estados 
    */

    //declarando un estado
    /*
        [0] => se guarda como se inicializa el estado
        [1] => se encarga de actualizar el estado
    */
    const [titleNote, setTitleNote] = useState("")
    const [descriptionNote, setDescriptionNote] = useState("")

    //funcion para capturar el titulo de la nota
    const handleTitle = (e) => {
        //cuando encontres la etiqueta captura su valor
        //console.log(e.target.value);

        //actualizamos el estado con el valor
        setTitleNote(e.target.value)
    }

    const handleDescription = (e) => {
        //cuando encontres la etiqueta captura su valor
        //console.log(e.target.value);

        //actualizamos el estado con el valor
        setDescriptionNote(e.target.value)
    }

    //metodo para guardar la nota
    const handleSubmit = (e) => {
        e.preventDefault()

        //guardar la nota

        //spread operator (...) hacemos una copia del arreglo y guardamos el arreglo
        setListNotes([...listNotes, {
            id: uuidv4(),
            title: titleNote,
            description: descriptionNote
        }])

        
        //limpiar el formulario
        setTitleNote("")
        setDescriptionNote("")
        e.target.reset()
    }

    //console.log(listNotes);

    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='form_data'>
                <div>
                    <input type="text" className={styles.input} placeholder='ingresa un titulo' onChange={(e) => handleTitle(e)}/>
                </div>

                <div>
                    <textarea className={styles.input} placeholder='descripcion...' onChange={(e) => handleDescription(e)}></textarea>
                </div>

                <input type="submit" value="Guardar Nota" className={styles.btn}/>
            </form>
        </div>
    )
}
