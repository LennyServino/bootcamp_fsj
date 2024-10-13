import styles from '../styles/Result.module.css'; // Importar estilos específicos
 
// Definimos la interfaz para las props
interface ResultProps {
    respuestas: string[]; // Arreglo de respuestas de tipo string
}
 
const Result: React.FC<ResultProps> = ({ respuestas }) => {
    return (
        <div className={styles.result}>
            <h2>Resultados de la Encuesta</h2>
            <ul>
                {respuestas.map((respuesta, index) => (
                    <li key={index}>
                        Pregunta {index + 1}: {respuesta}
                    </li>
                ))}
            </ul>
            <h3>¡Gracias por participar!</h3>
        </div>
    );
};
 
export default Result;