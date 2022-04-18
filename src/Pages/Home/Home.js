import React from 'react';
import Recommends from '../../Mentoring/Recommends';
import Banner from '../Banner/Banner';
import Services from './Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Recommends></Recommends>
            <footer className=' py-5 text-center text-white' style={{ fontFamily: 'Bai Jamjuree' }} id="footer">
                <h3 className='fw-bold  mt-4' >BEST CAREER MENTOR</h3>
                <p >Handcrafted by me @Rabbi_Ahemed</p>
                <p >Copyright © 2022 Best Career Mentor All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;