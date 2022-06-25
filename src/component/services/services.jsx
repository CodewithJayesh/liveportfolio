import React from 'react'
import './services.css'
import{BsCheck2} from  'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__listi-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF THE UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Web devlopment</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Devlopment*/}
        <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF THE Content creation*/}
      </div> 
    </section>
  )
}

export default services
