import React from 'react'
import styles from '../styles/Notes.module.css'

export default function Notes({title, description, idNote ,deleteNote}) {
    return (
        <div className={styles.card_note}>
            <button className={styles.btn} onClick={() => deleteNote(idNote)}>X</button>
            <h2 className='title-note'>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
