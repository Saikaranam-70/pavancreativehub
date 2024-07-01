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
                Your team delivered exceptional service and top-notch results on our latest project. The attention to detail and dedication to meeting our needs were evident throughout the entire process. We are thrilled with the outcome!
                </p>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                    </div>
                    <div>
                        <h3>MANIKANTA</h3>
                        <span>9063686637</span>
                    </div>
                </div>
                <p>
                Working with your company has been a pleasure. The team was highly professional, efficient, and communicative. They consistently met deadlines and exceeded our expectations. We look forward to future collaborations.
                </p>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                    </div>
                    <div>
                        <h3>RAMPRASAD</h3>
                        <span>7981806627</span>
                    </div>
                </div>
                <p>
                We were impressed by the innovative solutions your team proposed for our project. The creative approach and cutting-edge technology used have significantly enhanced our digital presence. Thank you for your outstanding work!
                </p>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                    </div>
                    <div>
                        <h3>AJAY</h3>
                        <span>9440542694</span>
                    </div>
                </div>
                <p>
                The quality of work provided was exceptional, and the support throughout the project was superb. Your team was always available to answer questions and provide guidance. We couldn't be happier with the final product.
                </p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
