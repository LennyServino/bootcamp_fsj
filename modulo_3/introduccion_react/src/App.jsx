import { useState } from 'react'
/* import './App.css' */
import Form from './components/Form'
import ListNotes from './components/ListNotes'
import Header from './Header'
import styles from './styles/App.module.css'


function App() {
    //estado para guardar notas en un array
    const [listNotes, setListNotes] = useState([])
    return (
        <>
            <Header fullname='Lenny Servino' saludo={'Este es un saludo'}/>
            <div className={styles.container}>
                <section>
                    <h2 className={styles.title}>Registrando Notas</h2>
                    {/* en el formulario le pasamos dos propiedades */}
                    <Form listNotes={listNotes} setListNotes={setListNotes}/>
                </section>
                <section>
                    <h2>Notas...</h2>
                    <ListNotes listNotes={listNotes} updateListNotes={setListNotes}/>
                </section>
            </div>
        </>
    )
}

export default App
