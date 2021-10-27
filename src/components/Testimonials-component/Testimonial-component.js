import React from "react";
import testimonial from "../Testimonials-component/Testimonial-component.module.css";
import persona1 from "../../assets/img/personal1@2x.png";
import persona2 from "../../assets/img/personal2@2x.png";
import persona3 from "../../assets/img/personal3@2x.png";

export const Testimonial = ()=> {



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
  <section  className={ testimonial.testimonials__container}>
    <div  className={ testimonial.btn_block } 
          onClick={toLeft}>
      <button type="button">
        <i className="fas fa-arrow-left"></i>
      </button>
    </div>
    <div  className={testimonial.slider } 
          id="slider">
      <div className={ testimonial.testimonial}>
        <div className={ testimonial.profile }>
          <img src={ persona1 } alt="jhon Harmon"/>
        </div>
        <blockquote className={ testimonial.quote }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos doloribus asperiores accusantium optio. Officia reprehenderit laboriosam corporis rem nostrum excepturi, in, assumenda ducimus tempora quas illo nesciunt debitis blanditiis vel. Adipisci, animi minima distinctio id odio officiis labore unde iste dicta. Sequi quisquam voluptatibus consequatur, saepe sint non iste vero hic nesciunt incidunt iusto quam atque, doloremque illum facere repellendus libero. Obcaecati cumque ea delectus tempora odit debitis. Dolor..
        <cite><b>jhon Harmon</b></cite>
        </blockquote>
      </div>
      <div className={ testimonial.testimonial}>
        <div className={ testimonial.profile }>
          <img src={ persona2 } alt="lady Harmon"/>
        </div>
        <blockquote className={ testimonial.quote }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos doloribus asperiores accusantium optio. Officia reprehenderit laboriosam corporis rem nostrum excepturi, in, assumenda ducimus tempora quas illo nesciunt debitis..
        <cite><b>lady Harmon</b></cite>
        </blockquote>
      </div>
      <div className={ testimonial.testimonial}>
        <div className={ testimonial.profile }>
          <img src={ persona3 } alt="Mary Harmon"/>
        </div>
        <blockquote className={ testimonial.quote }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos doloribus asperiores accusantium optio. Officia reprehenderit laboriosam corporis rem nostrum excepturi, in, assumenda ducimus tempora quas illo nesciunt debitis..

        Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam officiis rem ex placeat quos sint repellat praesentium numquam qui.
        <cite><b>Mary Harmon</b></cite>
        </blockquote>
      </div>
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