import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';
const Service = ({ service }) => {
    const { id, name, image, details, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = () => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='card' style={{ border: '2px solid azure' }} id='service'>

            <img className='w-50 h-50 mx-auto img-fluid' src={image} alt="" />
            <h4 style={{ fontFamily: 'Bai Jamjuree' }} className='mx-auto'>{name}</h4>

            <p className='px-3'>{details}</p>
            <h5 className='px-3'>Price: {price}</h5>
            <button onClick={() => navigateToServiceDetail(id)} className='bg-info text-white fw-bold mx-5 my-3 py-2' style={{ fontSize: '18px' }}>Checkout</button>
        </div>
    );
};

export default Service;