import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ContenedorPrincipal from './components/ContenedorPrincipal/ContenedorPrincipal'


function App() {
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <Navbar/>
      <switch>
        <Routes path='/inicio' Component={Home}/>
      </switch>
    </div>  
    </BrowserRouter>
    <Home/>
    <ContenedorPrincipal/>
    </>
  )
}

export default App
