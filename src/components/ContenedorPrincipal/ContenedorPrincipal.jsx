import React from 'react'
import './ContenedorPrincipal.css'
import Mision from '../Mision/Mision'
import Sucursales from '../Sucursales/Sucursales'
import MyContextProvider from '../MyContext/MyContext'
import InsumosHome from '../InsumosHome/InsumosHome'


const ContenedorPrincipal = () => {
  return (
    <div className='ContenedorPrincipal'>
      <MyContextProvider>
        <Mision/>
        <Sucursales/>
        <InsumosHome/>
      </MyContextProvider>
    </div>
  )
}

export default ContenedorPrincipal