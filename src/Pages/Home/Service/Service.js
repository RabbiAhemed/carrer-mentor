import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';
const Service = ({ service }) => {
    const { id, name, image, details } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = () => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='bg-info' style={{ border: '2px solid red' }}>
            <h4 style={{ fontFamily: 'Bai Jamjuree' }}>{name}</h4>
            <img className='img-fluid' src={image} alt="" />
            <h3>Price:</h3>
            <p>{details}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='bg-success'>Click</button>
        </div>
    );
};

export default Service;