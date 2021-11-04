import React from "react";
import testimonial from "../Testimonials-component/Testimonials-component.module.css";
import { testimonials } from "../../assets/data/testimonials";
import { Testimonial } from "../Testimonial-component/Testimonial-component";

export const Testimonials = ()=> {



  function toLeft(){
    let slider = document.querySelector('#slider');

    if(slider?.scrollLeft === 0){
      slider.scrollLeft = 2882;
    }else{
      slider.scrollLeft -= slider.offsetWidth;
    }

  }

  function toRight(){
    let slider = document.querySelector('#slider');
    
    if(slider?.scrollLeft === (slider?.scrollWidth - slider?.offsetWidth)){
      slider.scrollLeft = 0;
    }else{
      slider.scrollLeft += slider.offsetWidth;
    }
  }
  
  return (
    <section  id="TESTIMONIOS"  
              className={ testimonial.testimonials__container}>
      <div  className={ testimonial.btn_block } 
            onClick={toLeft}>
        <button type="button">
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>
      <div  className={testimonial.slider } 
            id="slider">
        {
          testimonials.map( (value, index) => {
            return (
              <Testimonial key={ index } 
                          info={ value }/>
            )
          })
        }
      </div>
      <div  className={ testimonial.btn_block} 
            onClick={toRight}>
        <button type="button">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  )
}