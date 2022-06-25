import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials.jsx'

const header = () => {
  return (
    <header>
     <div className="container header__container">

       <h5>Hello I'm</h5>
       <h1>Patel Jayesh</h1>
       <h5 className="text-light">FullStack devloper </h5>
       <CTA/>
       <HeaderSocials/>

       <div className="me">
         <img src={ME} alt="Jayesh" />
       </div>
       <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>

    </header>
  )
}

export default header
