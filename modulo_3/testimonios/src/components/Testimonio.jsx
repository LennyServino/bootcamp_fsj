import React from 'react'
//cuando las imagenes no estan en la carpeta public se tienen que importar
import kelley from '../../imagenes/testimonio-kelley.png'
import '../stylesheets/Testimonio.css'

function Testimonio({testimonio, nombre, cargo}) {
  return (
    <>
      <div className="contenedor-testimonio">
        <img className='imagen-testimonio' src={ kelley } alt="Foto" />
        <div className="contenedor-texto-testimonio">
          <p className="texto-testimonio">{testimonio}</p>
          <p className="nombre-testimonio">{nombre}.</p>
          <p className="cargo-testimonio">{cargo}</p>
        </div>
      </div>
    </>
  )
}

export default Testimonio;
