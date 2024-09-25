import React from 'react';
import './ComponenteSucursal.css';

const ComponenteSucursal = ({ nombresucursal, informacion }) => {
  return (
    <div className='ComponenteSucursal'>
      <p className="TituloSucursal">Sucursales</p>
      <h2 className="NombreSucursal">{nombresucursal}</h2>
      <hr />
      <div className="Informacion">
        {informacion.map((item, index) => (
          <div key={index} className="ContainerInformacion">
            <img
              src={item.imagen}
              alt={item.tituloinformacion}
              className="InformacionImagen"
            />
            <div>
              <h3 className='TituloInformacion'>{item.tituloinformacion}</h3>
              <p className="InformacionSucursales">{item.informacionsucursales}</p>
              {item.ubicacion && <p className="InformacionSucursales">{item.ubicacion}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponenteSucursal;
