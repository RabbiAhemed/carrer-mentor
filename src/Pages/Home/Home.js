import React from 'react';
import Recommends from '../../Mentoring/Recommends';
import Banner from '../Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Recommends></Recommends>
            <footer>
                <p>footer</p>
            </footer>
        </div>
    );
};

export default Home;