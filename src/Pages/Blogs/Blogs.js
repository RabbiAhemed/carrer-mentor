import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-4'>
            <h1 className='text-center fw-bold' style={{ fontFamily: 'Bai Jamjuree' }}>BLOGS</h1>
            <h4><strong>Difference between authorization and authentication:</strong></h4>
            <p>Authentication lets us know who a user is, whereas authorization determines what the user is permitted to do.if he is allowed to access the information/component or not. <br />in other word, authentication is for knowing who a client is, and authorization is what the client its permit to do.</p>
            <div>
                <h4>Why are you using firebase?What other options do you have to implement authentication?</h4>
                <p>Google's Firebase can be used for the following: In the database, Firebase maintains all data in real time. As a result, data transfer to and from the database is simple and speedy. <br />Amazon Web Service (AWS) is an alternative for firebase.</p>
            </div>
            <div>
                <h4>What other services does firebase provide other than authentication</h4>
                <p>Firebase provides Realtime Database,Hosting,Remote Configuration,Cloud Messaging,Analytics,Crash Reporting etc other than authentication.</p>
            </div>
        </div>
    );
};

export default Blogs;