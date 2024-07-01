import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
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
    <div className='testimonials'>
      <img src={next} alt="" onClick={sliderForward} className="next" />
      <img src={back} alt="" onClick={sliderBackward} className="back" />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                    </div>
                    <div>
                        <h3>SAI</h3>
                        <span>7095835048</span>
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
                        <img src={user2} alt="" />
                    </div>
                    <div>
                        <h3>MANIKANTA</h3>
                        <span>7095835048</span>
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
                        <img src={user3} alt="" />
                    </div>
                    <div>
                        <h3>RAMPRASAD</h3>
                        <span>7095835048</span>
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
                        <img src={user4} alt="" />
                    </div>
                    <div>
                        <h3>AJAY</h3>
                        <span>7095835048</span>
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
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
