import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Characters.module.css'
import { FaHeart } from "react-icons/fa";

export default function Characters({favorite, setFavorite}) {
    //un estado para guardar a los personajes
    const [characters, setCharacters] = useState([])

    //estado para la carga de datos
    const [loading, setLoading] = useState(true)
    //estado para el manejo de errores
    const [error, setError] = useState(null)

    

    //metodo para agregar y eliminar de favoritos
    const toogleFavorite = (character) => {
        //find => encontrar un elemento en un arreglo y lo devuelve
        //some => devuelve true si lo encuentra o false si no lo encuentra
        //validando si el personaje esta agregado al favoritos
        if(favorite.some((element) => element.id == character.id)) {
            //eliminamos el persona de favoritos
            //actualizamos el arreglo filtrando con los datos que si necesitamos
            setFavorite(favorite.filter((element) => element.id !== character.id))
        } else {
            //actualizamos el estado de los favoritos
            setFavorite([...favorite, character])
        }
    }

    //imprimiendo el estado de los favoritos
    //console.log(favorite);
    
    /*
        el efecto que se va hacer (funcion)
        arreglo de dependencia
        [] => representa que solamente se va a renderizar una vez
    */
    useEffect(() => {
        //metodo para obtener la informacion de la api
        const getCharacters = async () => {
            try {
                //haciendo una promesa para testear la carga de datos
                //la promesa se retrace 2 segundos(para pruebas)
                //await new Promise((resolve) => setTimeout(resolve, 2000))

                const response = await axios.get('https://dragonball-api.com/api/characters')

                //de la data que manda axios solicitamos solo el arreglo de los personajes
                /* console.log(response.data.items); */

                //actualizando el estado de los personajes
                setCharacters(response.data.items)

                //desestructurar la data
                //const { items } = response.data
            } catch (error) {
                setError(error.message)
                console.log(error.message);
            } finally {
                setLoading(false)
            }
        }

        //llamando a la funcion para que haga efecto
        getCharacters();
    }, []) //arreglo de dependencias

    //console.log(characters);

    //validando la carga de datos y el manejo de errores
    if(loading) return <div>Cargando datos...</div>

    if(error) return <div>Error: Nos se pudo cargar los personajes</div>

    return (
        <div className={styles.container}>
            <h2>Personajes</h2>
            <div className={styles.container_card}>
                {/* iterar los personajes */}
                {
                    characters.map((character) => {
                        const isFavorite = favorite.some((element) => element.id == character.id);
                        return (
                            <div key={character.id} className={styles.card}>
                                <img src={character.image} alt={character.name} />
                                <h3>{character.name}</h3>
                                <p><strong>KI: </strong>{character.ki <= 0 ? <span>este guerro no tiene ki</span> : character.ki }</p>
                                <p><strong>Raza:</strong> {character.race}</p>
                                <button onClick={() => toogleFavorite(character)}><FaHeart className={isFavorite ? styles.active : styles.inactive}/></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
