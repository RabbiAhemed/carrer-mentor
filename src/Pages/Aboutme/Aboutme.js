import React from 'react';
import './Aboutme.css'

const Aboutme = () => {
    return (
        <div>
            <h1 className='text-center fw-bold my-5' id='about-title'>ABOUT ME</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h2 style={{ fontFamily: 'Bai Jamjuree' }}><span style={{ fontStyle: 'italic' }}>Hi,</span>I am Rabbi Ahemed</h2>
                </div>
                <div>
                    <img className='img-fluid' src="https://i.ibb.co/X2QTVsM/mypiccopy.png" alt="" />
                </div>
            </div>
            <div className='mx-5'>
                <h2 style={{ fontStyle: "italic" }}>My goal is to gain confidence and become a successful junior web developer using my potential, and express my skills for growth and fame.
                </h2>
            </div>
        </div >
    );
};

export default Aboutme;