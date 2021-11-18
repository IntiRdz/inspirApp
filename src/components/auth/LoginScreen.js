import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

import { InspiraLogo } from '../../assets/icons/InspiraLogo';
import { Google } from '../../assets/icons/Google';
//import { InspiraLetter } from '../../assets/icons/InspiraLetter';

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
        <>
            <main className="form-signin">
            <form 
                onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >
                
                <div className="banner_img">
                {/* <div className="animate__animated animate__fadeInDown"> */}
                    <InspiraLogo fill="#1c4e92" width="180px" height="180px" />
                    {/* <InspiraLetter fill="#5290BE" width="300px" height="150px" /> */}
                </div>

                <h1 className="h3 mb-3 fw-normal">Bienvenido</h1>

                <div className="form-floating">
                    <input 
                        type="mail" 
                        placeholder="Correo Electrónico"
                        name="email" 
                        className="form-control" 
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                    <label for="mail">Correo Electrónico</label>
                </div>
                
                <div className="form-floating">
                    <input 
                        type="password" 
                        placeholder="Password"
                        name="password" 
                        className="form-control" 
                        value={ password }
                        onChange={ handleInputChange }
                    />
                    <label for="password">Contraseña</label>
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

               
                <Link 
                        to="/auth/register"
                        className="link mt-4"
                    >
                        Crear una nueva Cuenta    
                </Link>
            </form>

            
            <p className="mt-3 text-muted copyright">Inspir@Corp-Ing &copy; 2021</p>

            </main>
        </>
    )
}
