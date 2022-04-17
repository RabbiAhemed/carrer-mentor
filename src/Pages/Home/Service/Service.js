import React from 'react';
const Service = ({ service }) => {
    const { name, image } = service;
    return (
        <div className='bg-info' style={{ border: '2px solid red' }}>
            <h4>Name:{name}</h4>
            <img className='img-fluid' src={image} alt="" />
            <h3>Price:</h3>
            <h4>Details:</h4>
            <button className='bg-success'>Click</button>
        </div>
    );
};

export default Service;