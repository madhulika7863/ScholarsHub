import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
    return (
        <div className='hero container'>
         <div className="hero-text">
            <h1>We Ensure Better Education For A Better World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Alias est dolore recusandae reprehenderit nam eos sapiente facere maxime quibusdam, 
            exercitationem possimus natus esse hic.</p>
            <button className='btn'>Explore More <img src={dark_arrow} 
            alt="" /></button>
         </div>
        </div>
    )
}

export default Hero
