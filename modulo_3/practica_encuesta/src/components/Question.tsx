import styles from '../styles/Question.module.css';

// Definimos la interfaz para las props
interface QuestionProps {
    pregunta: string;
    opciones: string[];
    seleccionarRespuesta: (opcion: string) => void;
}

const Question: React.FC<QuestionProps> = ({pregunta, opciones, seleccionarRespuesta}) => {
    return (
        <div className={styles.question}>
            <h2>{pregunta}</h2>
            <ul>
                {opciones.map((opcion, index) => (
                    <li key={index}>
                        <button onClick={() => seleccionarRespuesta(opcion)}>
                            {opcion}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;