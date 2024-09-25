import React, { useState, useEffect } from 'react';
import {  NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbarTransparent, setNavbarTransparent] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const handleScroll = () => {
      const servicesSection = document.getElementById('Mision');
      const servicesTop = servicesSection?.offsetTop || 0;
  
      if (window.scrollY >= servicesTop) {
        setNavbarTransparent(true);
      } else {
        setNavbarTransparent(false);
      }
    };
  
    const handleLinkClick = (e, targetId) => {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div className={`Navbar ${navbarTransparent ? 'transparent' : ''}`}>
      <div className='BrandNavbar'>
        <img className='LogoNavbar' src="/Navbar/Brand CampoFertil.svg" alt="LogoNavbar" />
      </div>
      <div className={`Burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="Stick"></div>
        <div className="Stick"></div>
        <div className="Stick"></div>
      </div>
      <div className={`Menu ${menuOpen ? 'open' : ''}`}>
        <div className="MenuClose" onClick={toggleMenu}>X</div>
        <ul>
          <li>
            <NavLink to='/inicio' activeClassName="active">
              Inicio
            </NavLink>
          </li>
          <li><NavLink to='/inicio' activeClassName="active">
              Insumos
            </NavLink></li>
          <li><NavLink to='/inicio' activeClassName="active">
              acopio
            </NavLink></li>
          <li><NavLink to='/inicio' activeClassName="active">
              logistica
            </NavLink></li>
            <li><NavLink to='/inicio' activeClassName="active">
              producción
            </NavLink></li>
            <li><NavLink to='/inicio' activeClassName="active">
              Nosotros 
            </NavLink></li>
            <li><NavLink to='/inicio' activeClassName="active">
              contacto
            </NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar