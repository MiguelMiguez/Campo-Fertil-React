import React from 'react'
import './ContenedorPrincipal.css'
import Mision from '../Mision/Mision'
import Sucursales from '../Sucursales/Sucursales'
import MyContextProvider from '../MyContext/MyContext'


const ContenedorPrincipal = () => {
  return (
    <div className='ContenedorPrincipal'>
      <Mision/>
      <MyContextProvider>
        <Sucursales />
      </MyContextProvider>
    </div>
  )
}

export default ContenedorPrincipal