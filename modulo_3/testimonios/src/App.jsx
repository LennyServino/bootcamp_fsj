import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Testimonio from './components/Testimonio'

function App() {

  return (
    <>
      <Testimonio 
        testimonio = 'Aparte de sus impresionantes habilidades técnicas, en general la mejor parte es su servicio personal de uno a uno. Ha sido excepcional. Siento que he llegado a conocer muy bien a su personal, y se esfuerzan por encontrar respuestas y conseguir los resultados deseados. He lidiado con muchos servicios de soporte técnico y atención al cliente y estos tipos sacan a todos los demás del camino; son 5 estrellas y más. Estoy muy impresionado y también lo está el dueño de nuestro negocio.'
        nombre = 'Kelley M'
        cargo = ''
      />

      <Testimonio 
        testimonio = 'CiraSync es nuestra solución para sincronizar principalmente la información de contacto con los iDevices de nuestra organización. En lugar de depender de una Lista Global de Direcciones (que no es realmente rápida en la entrega de información), CiraSync empuja la información directamente a los dispositivos, información siempre disponible, en línea o fuera de línea. Somos unos clientes satisfechos.'
        nombre = 'Eddy K'
        cargo = 'Gerente de Instalaciones y TI, 24Vision.Solutions'
      />
    </>
  )
}

export default App
