import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Pratik.jpeg'
import AVTR2 from '../../assets/Prince.jpeg'
import AVTR3 from '../../assets/Ashish.jpg'
import AVTR4 from '../../assets/Nitish.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar: AVTR1,
    name: 'Pratik Rana',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem commodi, sunt veritatis repellendus accusantium in consectetur. Placeat molestiae blanditiis vero."
  },
  {
    avatar: AVTR2,
    name: 'Prince',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem commodi, sunt veritatis repellendus accusantium in consectetur. Placeat molestiae blanditiis vero."
  },
  {
    avatar: AVTR3,
    name: 'sharma ashish',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem commodi, sunt veritatis repellendus accusantium in consectetur. Placeat molestiae blanditiis vero."
  },
  {
    avatar: AVTR4,
    name: 'Patel Nitish',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem commodi, sunt veritatis repellendus accusantium in consectetur. Placeat molestiae blanditiis vero."
  },
 
]

const testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avater">
            <img src={avatar} alt="Pratik" />   
          </div>
          <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}
              </small>
        </SwiperSlide>
            )
          })
        }
       
      </Swiper>
    </section>
  )
}

export default testimonials

