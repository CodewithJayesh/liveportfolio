import React from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/About/About'
import Experience from './component/experience/experience'
import Service from './component/services/services'
import Portfolio from './component/portfolio/portfolio'
import Testimonials from './component/testimonials/testimonials'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      </>
  )
}

export default App
