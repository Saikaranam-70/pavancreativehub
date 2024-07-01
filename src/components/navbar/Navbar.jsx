import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import menu from '../../assets/menu-icon.png'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const toggleMenu = () =>{
    mobile ? setMobile(false) : setMobile(true)
  }
  return (
    <nav className="container">
        <img src={logo} alt="" className="logo" />
        <ul className={mobile ? '': 'hide'}>
            <li><ScrollLink to='home' smooth={true} offset={-200} duration={500}>Home</ScrollLink> </li>
            <li> <ScrollLink to='programs' smooth={true} offset={-300} duration={500}> What We Offer</ScrollLink></li>
            <li> <ScrollLink to='testimonials' smooth={true} offset={-350} duration={500} >Testimonials</ScrollLink> </li>
            <li><ScrollLink to='Projects' smooth={true} offset={-400} duration={500}>Projects</ScrollLink>  </li>
            <li> <ScrollLink to='contact' smooth={true} offset={-400} duration={500}>Contact us</ScrollLink>  </li>
        </ul>
        <img onClick={toggleMenu} src={menu} className='menu' alt="" />
    </nav>
  )
}

export default Navbar
