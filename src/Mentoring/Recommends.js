import React from 'react';
import './Recommends.css'
const Recommends = () => {
    return (
        <div className='text-center bg-light my-5 py-4'>
            <h2 id='title' className='fw-bold'>RECOMMENDATIONS</h2>

            <div className='comments'>
                <p>Thank you so much for your valuable guidelines for all job holder</p>
                <p><strong>Raihan Hossain</strong></p></div>


            <div className='comments'>
                <p>He is the best career coach in Bangladesh.</p>
                <p><strong>Mosharaf Hossin</strong></p>
            </div>

            <div className='comments'>
                <p>Thank you so much sir for your valuable guidelines for all job holder</p>
                <p><strong>Mahbub EEE</strong></p>
            </div>

        </div>
    );
};

export default Recommends;