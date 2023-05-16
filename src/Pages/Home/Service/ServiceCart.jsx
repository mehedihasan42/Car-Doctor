import React from 'react';

const ServiceCart = ({ service }) => {
    const { title, img, price, description } = service;
    return (
        <div className="card w-96 glass mb-4">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price:${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;