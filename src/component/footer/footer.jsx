import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
    <a href="#" className="footer__logo">Patel Jayesh</a>
    <ul className="permalinks">
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Expeirience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#testimonial">Testimonial</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com"><AiFillFacebook/></a>
      <a href="https://Instagram.com"><FaInstagram/></a>
      <a href="https://twitter.com"><BsTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy;Jayesh Portfolio. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default footer
