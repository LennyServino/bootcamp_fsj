import React from 'react'
import Notes from './Notes'

export default function ListNotes({listNotes, updateListNotes}) {
    const deleteNote = (id) => {
        console.log(id);
        //filtado de las notas en base al id seleccionado
        updateListNotes(listNotes.filter((note) => note.id !== id))
    }

    return (
        <div>
            {
                //operador ternario
                listNotes.length > 0 ?
                    listNotes.map((note) => {
                        return (
                            /* Pasando la informacion de cada nota*/
                            <Notes key={note.id} title={note.title} description={note.description} idNote={note.id} deleteNote={deleteNote}/>
                        )
                    })
                : <div>No hay notas que mostrar...</div>
            }
        </div>
    )
}