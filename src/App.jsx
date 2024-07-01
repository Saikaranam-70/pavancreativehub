import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import Testimonials from './components/Testimonials/Testimonials'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Title subTitle = 'Our Speciality'  title = 'What We Offer'/>
      <Programs />
      <Title subTitle = 'What our customers says' title = 'Testimonials'/>
      <Testimonials />
      <Title subTitle = 'What We Did In Past' title = 'Projects'/>
      <Project />
      <Title subTitle = 'Contact Us' title = 'Get in Touch' />
      <Contact />
      <Footer />

      
    </div>
  )
}

export default App
