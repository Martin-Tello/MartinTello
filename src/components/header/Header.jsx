import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials  from './HeaderSocials'
import './header.css'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hellow I'm</h5>
        <h1>Martin Tello</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <div classname="header_iconos">
        <HeaderSocials />
        </div>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header