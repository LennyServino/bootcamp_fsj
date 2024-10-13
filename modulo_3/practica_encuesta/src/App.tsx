import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import encuestaLogo from './assets/encuesta_logo.png';

interface Pregunta {
  pregunta: string; // Texto para la preguntas.
  opciones: string[]; // Las opciones de respuestas.
}

const App: React.FC = () => { // El componente principal de la aplicacion
  const [preguntaActual, setPreguntaActual] = useState<number>(0);
  const [respuestas, setRespuestas] = useState<string[]>([]);

  const preguntas: Pregunta[] = [
    {
      pregunta: '¿Cual es tu comida favorita?', // Pregunta 1
      opciones: ['Pizza', 'Sushi', 'Pupusas', 'Tacos'], //Opciones para la pregunta 1
    },
    {
      pregunta: '¿Cual es tu deporte favorito?', // Pregunta 2
      opciones: ['Futbol', 'Baloncesto', 'Beisbol', 'Natacion'],
    },
  ];

  const seleccionarRespuesta = (opcion: string) => { // para manejar la seleccion de respuesta
    setRespuestas([...respuestas, opcion]); // sirve para agregar la respuesta que seleccione
    const siguientePregunta = preguntaActual + 1;
    if (siguientePregunta < preguntas.length) {
      setPreguntaActual(siguientePregunta);
    } else {
      setPreguntaActual(-1); // para indica que ya se completo
    }
  };

  return (
    <div className='container'>
      <h1>
        <img src={encuestaLogo} alt="Logo de la encuesta" />
        Encuesta Interactiva
      </h1>
      {preguntaActual >= 0 ? (
        <Question
        pregunta={preguntas[preguntaActual].pregunta} // pasar la pregunta actual
        opciones={preguntas[preguntaActual].opciones} // pasar las opciones
        seleccionarRespuesta={seleccionarRespuesta}
        />
      ) : (
        <Result respuestas={respuestas} />
      )}
    </div>
  );
};

export default App;