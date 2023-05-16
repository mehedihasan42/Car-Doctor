import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    const text = <>
         <div className="absolute w-3/4 lg:w-2/5 space-y-7 lg:mt-auto  lg:p-20 rounded-xl
         bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
    <h1 className='text-2xl lg:text-4xl text-white font-bold'>Affordable Price For Car Servicing</h1>
    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>   
     <button className="btn mr-2 btn-error">Discover More</button>
    <button className="btn btn-outline btn-primary">Latest Project</button>
    </div>
    </>
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    {text}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
      <a href="#slide6" className="btn mr-2 btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full rounded-xl" />
    {text}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
      <a href="#slide1" className="btn mr-2 btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full rounded-xl" />
    {text}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
      <a href="#slide2" className="btn mr-2 btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full rounded-xl" />
    {text}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
      <a href="#slide3" className="btn mr-2 btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full rounded-xl" />
    {text}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
      <a href="#slide4" className="btn mr-2 btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src={img6} className="w-full rounded-xl" />
    {text}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
      <a href="#slide5" className="btn mr-2 btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;