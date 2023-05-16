import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
               <div className='lg:w-1/2 mb-8 relative'>
               <img src={img1} className="w-3/4 rounded-lg lg:shadow-2xl" />
                <img src={img2} className="w-1/2 absolute right-24 top-1/2 border-white border-7 rounded-lg lg:shadow-2xl" />
               </div>
                <div className='lg:w-1/2'>
                    <h1 className="lg:text-5xl text-center lg:text-start font-bold">Box Office News!</h1>
                    <p className="lg:py-6 text-center lg:text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;