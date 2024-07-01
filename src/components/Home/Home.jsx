import React from 'react'
import './Home.css'
import founder from '../../assets/founder.jpg'

const Home = () => {
  return (
    <div className='home'>
      <div className="main">
        <h4>Founder Of </h4>
        <h3>PAVAN CREATIVE HUB</h3>
      </div>
      <div className="all">
      <div className="founder">
        <img src={founder} alt="" />
      </div>
      <div className="content">
        <h3>PAVAN KUMAR KANAPAKALA</h3>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span><br />
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, vitae!</span>
      </div>
      </div>
    </div>
  )
}

export default Home
