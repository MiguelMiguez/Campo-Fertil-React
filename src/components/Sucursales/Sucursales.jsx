import React from 'react';
import './Sucursales.css';
import ComponenteSucursal from '../ComponenteSucursal/ComponenteSucursal';
import { useMyContext } from '../MyContext/MyContext'; 

const Sucursales = () => {
  const { nombresucursal, informacionvillaguay, informacionvallemaria } = useMyContext();

  return (
    <div className='Sucursales'>
        <div className="InfoSucursales">
            <h2 className="TituloSucursales">SUCURSALES</h2>
            <p className='TextoSucursales'> Campo Fértil S.R.L. cuenta con dos sucursales principales. La sede central está ubicada en Villaguay, Entre Ríos, donde se realizan actividades de venta de agroquímicos, acondicionamiento y acopio de cereales, y servicios de transporte. La otra sucursal se encuentra en Aldea Valle María, enfocándose en la venta de agroquímicos y cubriendo la zona de influencia del centro oeste provincial.
            </p>
        </div>
        <div className="ComponenteSucursal">
          <ComponenteSucursal 
              nombresucursal={nombresucursal[0].nombre} 
              informacion={informacionvillaguay} 
          />
          <ComponenteSucursal 
              nombresucursal={nombresucursal[1].nombre} 
              informacion={informacionvallemaria} 
          />
        </div>
    </div>
  )
}

export default Sucursales;
