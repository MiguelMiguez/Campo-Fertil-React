import React from 'react';
import './InsumosHome.css';
import { useMyContext } from '../MyContext/MyContext'; 

const InsumosHome = () => {
  const resumeData = useMyContext(); 

  return (
    <div className='InsumosHome'>
      <h2 className='TituloSucursales'>INSUMOS</h2>
      <div className="ContainerLogosInsumos">
        {resumeData.logosinsumos.map((logo, index) => (
          <div key={index} className="LogosInsumos">
            <img className='Logos' src={logo.imagen} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
      <div className="BotonInsumos">
        <button className='VerTodos'>VER TODOS</button>
      </div>
    </div>
  );
};

export default InsumosHome;
