import React from 'react'
import './experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id="experience">
      <h5>What skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_fronted">
          <h3>Fronted Development</h3>
          <div className="experience__content">
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>HTML</h4>
               <small className="text-light">Experienced</small>
               </div>
            </article>
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>CSS</h4>
               <small className="text-light">Intermediate</small>
               </div>
            </article>
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
              <div> 
               <h4>Javascript</h4>
               <small className="text-light">Experienced</small>
               </div>
            </article>
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>Bootstrap</h4>
               <small className="text-light">Experienced</small>
               </div>
            </article>
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
                 <h4>Tailwind</h4>
               <small className="text-light">Experienced</small>
               </div>
            </article>
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>React</h4>
               <small className="text-light">Experienced</small>
              </div>
            </article>
            </div>
        </div>
        {/* End of the Fronted*/}
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>Node Js</h4>
               <small className="text-light">Experienced</small>
               </div>
            </article>
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MongoDB</h4>
               <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>PHP</h4>
               <small className="text-light">Intermediate</small>
               </div>
            </article>
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>MYSQL</h4>
               <small className="text-light">Experienced</small>
               </div>
            </article>
            <article className="experience_details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>Python</h4>
               <small className="text-light">Experienced</small>
               </div>
            </article>
            </div>
        </div>
        </div>
      
    </section>
  )
}

export default experience
