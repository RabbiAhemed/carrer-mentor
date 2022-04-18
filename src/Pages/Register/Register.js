import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'
const Register = () => {
    const [
        createUserWithEmailAndPassword, user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const navigateToLogin = event => {
        event.preventDefault()
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='register-form'>
            <h3 style={{ textAlign: 'center' }}>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" />
                <input type="email" name="email" id="" />
                <input type="password" name="password" id="" />
                <input type="submit" value="Register" />
            </form>
            <p>Have an account?<Link to='/login' className='text-primary text-decoration-none' onClick={navigateToLogin} >Login Now</Link></p>
        </div>
    );
};

export default Register;