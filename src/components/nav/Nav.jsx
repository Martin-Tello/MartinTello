import React from 'react'
import { GoHome } from 'react-icons/go'
import { FaUserTie } from 'react-icons/fa'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { MdMiscellaneousServices } from 'react-icons/md'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import './nav.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react'
const Nav = () => {
  const {activeNav, setActiveNav} = useState('container header_container');
  // const linkStyle = {
  //   // margin: "1rem",
  //   // textDecoration: "none",
  //   // color: 'blue'
  //   background: "transparent",
  //   padding: "0.9rem",
  //   borderRadius: "50%",
  //   display: "flex",
  //   color: "var(--color-light)",
  //   fontSize: "1.1rem",
  //   hover: "rgba(0, 0, 0, 0.9)",
  //   borderBottom: "1px solid #333"
  // };
  const styleLink = {
    background: "red"
  }
  return (
    <nav id="home" >
      <a onClick={()=>setActiveNav('container header_container')} className={activeNav==='container header_container' ? 'active' : ''}><Link to="container header_container" 
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      ><GoHome size={50}/></Link>
      </a>
      
      {/* <a href="#" target="_blank"> <GoHome size={50}/></a> */}
      <a onClick={()=>setActiveNav('about')} className={activeNav==='about' ? 'active' : ''}
      ><Link to="about" spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      ><FaUserTie size={50}/></Link>
      </a>
      {/* <a href="#about" target="_blank"> <FaUserTie size={50}/></a> */}
      <a onClick={()=>setActiveNav('experience')} className={activeNav==='experience' ? 'active' : ''}
      ><Link to="experience" 
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      ><MdOutlineWorkOutline size={50}/></Link>
      </a>
      {/* <a href="#experience" target="_blank"> <MdOutlineWorkOutline size={50}/></a> */}
      <a onClick={()=>setActiveNav('portfolio')} className={activeNav==='portfolio' ? 'active' : ''}
      ><Link to="portfolio" 
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      ><MdMiscellaneousServices size={50}/></Link>
      </a>
      {/* <a href="#services" target="_blank"> <MdMiscellaneousServices size={50}/></a> */}
      <a onClick={()=>setActiveNav('contact')} className={activeNav==='contact' ? 'active' : ''}
      ><Link to="contact" 
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      ><MdOutlineAlternateEmail size={50}/></Link>
      </a>
      {/* <a href="#contact" target="_blank"> <MdOutlineAlternateEmail size={50}/></a> */}
      
      
      
    </nav>
  )
}

export default Nav