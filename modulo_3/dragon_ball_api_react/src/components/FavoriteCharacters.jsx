import React from 'react'
import styles from '../styles/FavoriteCharacters.module.css'

export default function FavoriteCharacters({favorites}) {
    return (
        <div className={styles.container_card}>
            {
                favorites.map((character) => {
                    return (
                        <div key={character.id} className={styles.card}>
                            <img src={character.image} alt={character.name} />
                            <h3>{character.name}</h3>
                            <p><strong>KI: </strong>{character.ki <= 0 ? <span>este guerro no tiene ki</span> : character.ki }</p>
                            <p><strong>Raza:</strong> {character.race}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}