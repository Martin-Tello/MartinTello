import React from 'react';
import './portfolio.css';
import IMG1 from  '../../assets/test1.jpg'
import IMG2 from  '../../assets/test2.jpg'
import IMG3 from  '../../assets/test3.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" with="300" height="300"/>
          </div>
          <h3>Web Development</h3>
            <div className="portfolio_item-cta">
            <a href='http://github.com' className='btn' target="_blank">GiHub</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            
            </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" with="300" height="300"/>
          </div>
          <h3>Competitive Programming</h3>
          <div className="portfolio_item-cta">
            <a href='http://github.com' className='btn' target="_blank">GiHub</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            
            </div>
        </article>
        
        <article className='portfolio_item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" with="300" height="300"/>
          </div>
          <h3>Machine Learning</h3>
          <div className="portfolio_item-cta">
            <a href='http://github.com' className='btn' target="_blank">GiHub</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio