import React, { useEffect, useRef, useState } from 'react'

import '../Testimonials/Testimonials.css'
import user1 from '../../assets/logo-desging.jpeg'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import { API } from '../data/data'
import { Link } from 'react-router-dom'
import './Project.css'

const Project = () => {
    const [state, setState] = useState([])

    const handleProjects = async() =>{
        try {
            const responce = await fetch(`${API}/program/getAllPrograms`);
            const data = await responce.json();
            setState(data.programs);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        handleProjects()
    },[])


    const slider = useRef();
    let tx = 0;
    const sliderForward = () =>{
        if(tx > -60){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const sliderBackward = () =>{
        if(tx <0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='Projects'>
        <img src={next} alt="" onClick={sliderForward} className="next" />
        <img src={back} alt="" onClick={sliderBackward} className="back" />
      <div className="slider">
        <ul ref={slider}>
            
                {state.map((item)=>{
                    return (
                    <>
                    <li key={item._id}>
                    <div className="slide">
                    <div className="user-info">
                        {item.image &&
                        <img className='img' src={`${API}/program/uploads/${item.image}`} alt="fdbhfwhf" 
                            
                            />
                        }
                    </div>
                    <div>
                    <h3>{item.projectname}</h3>
                    </div>
                </div>
                <p className='feedbackCell'>
                    {item.description}
                </p>
            </li>

                    </>
                    )
                })}
                
            {/*<li>
                <div className="slide">
                    <div className="user-info">
                        <img className='img' src={user1} alt="" />
                    </div>
                    <div>
                    <h3>LOGO DESGNING</h3>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Earum excepturi optio corrupti
                    voluptate et. Libero beatae sapiente, dicta
                    commodi impedit iste magni ex voluptatem quas,
                    necessitatibus aliquam. Possimus minima eum optio,
                    quos molestiae odit assumenda consequuntur magni
                    quas enim tempore.
                </p>
            </li>
            <li>
                <div className="slide">
                    <div  className="user-info">
                        <img className='img' src={user1} alt="" />
                    </div>
                    <div>
                        <h3>LOGO DESGNING</h3>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Earum excepturi optio corrupti
                    voluptate et. Libero beatae sapiente, dicta
                    commodi impedit iste magni ex voluptatem quas,
                    necessitatibus aliquam. Possimus minima eum optio,
                    quos molestiae odit assumenda consequuntur magni
                    quas enim tempore.
                </p>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img className='img' src={user1} alt="" />
                    </div>
                    <div>
                        <h3>LOGO DESGNING</h3>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Earum excepturi optio corrupti
                    voluptate et. Libero beatae sapiente, dicta
                    commodi impedit iste magni ex voluptatem quas,
                    necessitatibus aliquam. Possimus minima eum optio,
                    quos molestiae odit assumenda consequuntur magni
                    quas enim tempore.
                </p>
            </li>*/}
        </ul>
      </div>
      <div className="btn">
        <Link to='/all-projects'>
        <button>View More</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Project
