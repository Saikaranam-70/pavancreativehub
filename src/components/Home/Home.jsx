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
        <span>The only way to do great work is to love what you do</span><br />
        <span>The best way to predict the future is to create it.</span>
      </div>
      </div>
    </div>
  )
}

export default Home
