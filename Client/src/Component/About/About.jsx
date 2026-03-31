import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
function About({setPlayState}) {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embark on trasformative educational journey with our Lorem, ipsum dolor sit 
                amet consectetur adipisicing elit. Dignissimos id itaque eligendi nisi voluptates 
                laboriosam. Numquam autem quidem quas odio repudiandae amet.</p>
                <p>Embark on trasformative educational journey with our Lorem, ipsum dolor sit 
                amet consectetur adipisicing elit. Dignissimos id itaque eligendi nisi voluptates 
                laboriosam. Numquam autem quidem quas odio repudiandae amet.</p>
                <p>Embark on trasformative educational journey with our Lorem, ipsum dolor sit 
                amet consectetur adipisicing elit. Dignissimos id itaque eligendi nisi voluptates 
                laboriosam. Numquam autem quidem quas odio repudiandae amet.</p>
            </div>
        </div>
    )
}

export default About
