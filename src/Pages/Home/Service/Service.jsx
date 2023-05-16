import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Service = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
           <div className='w-4/5 lg:w-2/3 text-center mx-auto my-4 lg:my-12'>
           <h1 className='text-2xl font-bold text-[#FF3811]'>Service</h1>
            <h3 className='text-3xl font-bold'>Our Service Area</h3>
            <p className='text-[#737373]'>The majority have suffered alteration in some form, by injected humour,
                or randomised words which do not look even slightly believable. </p>
           </div>
        <div className='grid lg:grid-cols-3'>
            {
                services.map(service=><ServiceCart
                     key={service.id}
                     service={service}
                     ></ServiceCart>)
            }
        </div>
        </div>
    );
};

export default Service;