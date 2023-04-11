import React, { useState } from 'react';
import { logo, logo2 } from '../../assets';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = () => {

    const navigate = useNavigate ();

    const [ email, setEmail ] = useState('');

    const [ password, setPassword ] = useState('');


    // SignIn Authentication 
    const signIn = e => {
        e.preventDefault();

        // Firebase Login Authentication Work
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    // Register Authentication 
    const register = e => {
        e.preventDefault();

        // Firebase Register Authentication Work
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                // It successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }


  return (
    <div className='login'>
        <Link to='/'>
            <img
                className='login__logo'
                src={logo2}
                alt=""
            />
        </Link>

        <div className="login__container">
            <h1>Sign in</h1>

            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={ e => setEmail(e.target.value) }/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={ e => setPassword(e.target.value) }/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By continuing, you agree to Chhavi Ghar's Conditions of Use and Privacy Notice.
                <br /><br />▶︎ Need help?
            </p>

            <button onClick={register} className='login__registerButton'>
                Create your Chhavi Ghar account
            </button>



        </div>


    </div>
  )
}

export default Login

