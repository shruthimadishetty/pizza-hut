import React from 'react'
import img_1 from '../../assets/pizza-image.jpg';
import './ImageText.css'


const ImageText = () => {
  return (
    <>
    <div className='image_text_container'>
        <div className='image_text_info'>
            <p>We don’t just make pizza. We make people’s days. Pizza Hut was built on the belief that pizza night should be special, and we carry that belief into everything we do. We deliver more pizza, pasta and wings than any other restaurant in the world. A true innovator in the pizza category, we were not only the first to provide America with Pan Pizza, but we were also the first ever to deliver pizza in space! We understand how to best serve our customers through tried and true service principles. We create food we’re proud to serve and deliver it fast, with a smile.</p>
            <p>All of this is made possible by unlocking the potential of our team members. We promise that at Pizza Hut, you can become your best, make friends and have fun. Because we’re the pizza company that lives life unboxed.</p>
        </div>
        <div className='image_container'>
           <img src={img_1} alt="" />
        </div>
    </div>
    </>
      
    
  )
}

export default ImageText
