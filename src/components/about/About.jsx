import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { TbAward } from 'react-icons/tb';
import { BsBriefcase } from "react-icons/bs";
import { BsFolderSymlink } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";

const About = () => {
  return (
    <section id='about'>
      <div className="test">
      <h5>Get To Know</h5>  
      <h2>About me</h2>
      </div>
      <div class='container about_container'>
        <div class='about_me'>
          <div className='about_me-image'>
              <img src={ME} alt='About image' />
          </div>
        </div>
        <div class='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <TbAward size={34} className='about_icon'/>
              <h5>Experience</h5>
              <small>+6 Six Months</small>

            </article>
            <article className='about_card'>
              <BsBriefcase size={34} className='about_icon'/>
              <h5>Worked Companies</h5>
              <small> Interbank </small>

            </article>
            <article className='about_card'>
              <BsFolderSymlink size={34} className='about_icon'/>
              <h5>Projects</h5>
              <small>Programming</small>

            </article>
            
          </div>
          <div className="test-move">
              <p>
              Alumno del décimo ciclo de la carrera Ingeniería de Sistemas en la Universidad de Lima. Líder del Círculo de Estudios de Análisis y Diseño de Algoritmos(CEADA), participante de eventos de programación competitiva como son los de la ACM -ICPC, Google Code Jam, Kickstart, Facebook Hacker Cup. Actualmente, con interés de crecimiento profesional en áreas de Data Science, Machine Learning, Inteligencia Artificial y Software Development. Conocimiento en programación utilizando( Java, Python, JS y C++) , manejo de consultas a base de datos SQL, dominio de Power BI y Excel, y con dominio del inglés a nivel avanzado.
              </p>
              <div className="especifico">
              <a className="btn btn-primary"><Link to="contact" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              // style={}
              >Let's Talk</Link>
      </a>
      </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About