import React from 'react'

export const Header = () => {
  return (
    <header className="header">
        <h4>Victor Marquez</h4>
        <ul className="header__nav">
            <li className="body_2-bold"><a href="#home" className="Home">HOME</a></li>
            <li className="body_2-bold"><a href="#proyects" className="Proyectos">PROYECTOS</a></li>
            <li className="body_2-bold"><a href="#contact" className="Contacto">CONTACTO</a></li>
        </ul>
    </header>
  )
}
