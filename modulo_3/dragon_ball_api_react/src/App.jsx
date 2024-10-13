import { useEffect, useState } from 'react'
import './App.css'
import Characters from './components/Characters'
import FavoriteCharacters from './components/favoriteCharacters'
import CharactersSWR from './components/CharactersSWR';

function App() {
  //utilizando el localstorage
  //Dando nombre al apartado donde guardaremos
  const favoriteStorage = localStorage.getItem('DragonBall') ? JSON.parse(localStorage.getItem('DragonBall')) : [];
  //console.log(favoriteStorage);

  //estado para los favoritos
  //cargamos favoriteStorage en el estado para cargar lo guardado en localstorage
  const [favorite, setFavorite] = useState(favoriteStorage)

  //useEffect => montar el almacenamiento de los favoritos en localstorage
  useEffect(() => {
    //indicar cuando hay un cambio en el almacenamiento del localstorage
    localStorage.setItem('DragonBall', JSON.stringify(favorite))
  }, [favorite])

  return (
    <>
      <h1>API Dragon Ball + React</h1>
      <section>
        <div>
          <h3>Personajes...</h3>
          {/* <Characters favorite={favorite} setFavorite={setFavorite}/> */}
          <CharactersSWR favorite={favorite} setFavorite={setFavorite}/>
        </div>
        <div>
          <h3>Favoritos</h3>
          <FavoriteCharacters favorites={favorite} />
        </div>
      </section>
    </>
  )
}

export default App
