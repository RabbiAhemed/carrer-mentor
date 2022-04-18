import React, { useRef } from 'react';
import { Alert, Button, Form, Toast } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, loading2, error2] = useSignInWithGoogle(auth);

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword, user, loading, error,
    ] = useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    const formHandleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const navigateToRegister = event => {
        navigate('register')
    }
    const navigateToReset = async () => {
        const email = emailRef.current.value;

        await sendPasswordResetEmail(email);
        toast('email sent')


    }

    let errorElement;
    if (error || error2) {
        errorElement =
            <div>
                <p className='text-danger'>{error?.message}</p>
            </div>
    }
    return (
        <div className='container w-50 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={formHandleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p>New User?<Link to='/register' className='text-primary text-decoration-none' onClick={navigateToRegister}>Register Now</Link></p>

            <button to='/register' className='btn btn-link text-primary pe-auto text-decoration-none' onClick={navigateToReset}>Reset Password</button>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div >
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 mx-auto'>Google Sign In</button>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;