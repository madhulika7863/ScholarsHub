import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom"
import './Testimonials.css'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonials() {

    const slider = useRef()
    const navigate = useNavigate()

    let tx = 0

    function slideForward(){
        if(tx > -50){
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    function slideBackward(){
        if(tx < 0){
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    function openProfile(id){
        navigate(`/testimonial/${id}`)
    }

    return (
        <div className='testimonials'>

            <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>

            <div className="slider">
                <ul ref={slider}>

                    <li onClick={()=>openProfile(1)}>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Madhulika Rao</h3>
                                    <span>ScholarsHub, India</span>
                                </div>
                            </div>
                            <p>Great learning environment and amazing faculty.</p>
                        </div>
                    </li>

                    <li onClick={()=>openProfile(2)}>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Harsh Tiwari</h3>
                                    <span>ScholarsHub, India</span>
                                </div>
                            </div>
                            <p>Excellent campus life and research opportunities.</p>
                        </div>
                    </li>

                    <li onClick={()=>openProfile(3)}>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Vaishali Singh</h3>
                                    <span>ScholarsHub, India</span>
                                </div>
                            </div>
                            <p>The best place to build technical skills.</p>
                        </div>
                    </li>

                    <li onClick={()=>openProfile(4)}>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Williams</h3>
                                    <span>ScholarsHub, India</span>
                                </div>
                            </div>
                            <p>Great placements and strong alumni network.</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Testimonials