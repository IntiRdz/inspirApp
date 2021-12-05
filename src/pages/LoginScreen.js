import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from '../actions/auth';

import { Google } from '../assets/icons/Google';
import { InspiraLetter } from '../assets/icons/InspiraLetter'
//import { InspiraLogo } from '../../assets/icons/InspiraLogo'

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
        /* email: 'nando@gmail.com',
           password: '123456' */
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <div className="auth-main">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="auth-box">
                <div className="square" style={{'--i':0}}></div>
                <div className="square" style={{'--i':1}}></div>
                <div className="square" style={{'--i':2}}></div>
                <div className="square" style={{'--i':3}}></div>
                <div className="square" style={{'--i':4}}></div>
                <div className="auth-container">
                    <div className="auth-form">
                        <div className="auth-logo">
                            {/* <InspiraLogo fill="#000080" width="200px" height="200px" /> */}
                            <InspiraLetter fill="#000080" width="270px" height="120px" />
                        </div>
                        <h2>Bienvenido</h2>
                        <form
                            onSubmit={ handleLogin }
                            className="animate__animated animate__fadeIn animate__faster"
                        >
                            <div className="inputBox">
                                <input 
                                    type="mail" 
                                    placeholder="Correo Electrónico"
                                    name="email" 
                                    className="form-control" 
                                    autoComplete="off"
                                    value={ email }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="inputBox">
                                <input 
                                    type="password" 
                                    placeholder="Password"
                                    name="password" 
                                    className="form-control" 
                                    value={ password }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-100 btn btn-lg btn-primary mt-3" 
                                disabled={ loading }
                            >
                                Ingresar
                            </button>

                            <div
                                onClick={ handleGoogleLogin }
                                className="btn btn-secondary buttonGoogle" 
                            >
                                <Google width="20px" height="18px"/>
                                <span className="ps-2">Ingresar con Google</span>
                            </div>                            
                            <div>
                            <Link 
                                    to="/auth/register"
                                    className="forget"
                                >
                                    ¿Olvidaste tu contraseña?    
                            </Link>

                            </div>
                            <Link 
                                    to="/auth/register"
                                    className="forget"
                                >
                                    Crear una nueva Cuenta    
                            </Link>
                        </form>

                        <p className="mt-3 text-muted copyright">InspirA-Corp InJc. &copy; 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
