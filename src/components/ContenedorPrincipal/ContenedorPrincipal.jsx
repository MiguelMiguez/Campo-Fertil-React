import React from 'react'
import './ContenedorPrincipal.css'
import Mision from '../Mision/Mision'
import Sucursales from '../Sucursales/Sucursales'


const ContenedorPrincipal = () => {
  return (
    <div className='ContenedorPrincipal'>
      <Mision/>
      <Sucursales/>
    </div>
  )
}

export default ContenedorPrincipal