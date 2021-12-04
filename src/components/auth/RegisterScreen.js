import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { InspiraLetter } from '../../assets/icons/InspiraLetter';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
/*      name: 'Fernando',
        email: 'nando@gmail.com',
        password: '123456',
        password2: '123456', */
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name ,email ,password ,password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        }

    }

    const isFormValid = () => {
        
        if ( name.trim().length === 0 ) {
            dispatch( setError('Name is required') )
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password should be at least 6 characters and match each other') )
            return false
        }
        
        dispatch( removeError() );
       return true;
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
                        <h2>Crear una cuenta</h2>
                        <form
                            onSubmit={ handleRegister }
                            className="animate__animated animate__fadeIn animate__faster"
                        >
            
                            {
                                msgError &&
                                (
                                    <div className="auth__alert-error">
                                        { msgError }
                                    </div>
                                )
                            }
                            <div className="inputBox">
                                <input 
                                    type="text"
                                    placeholder="Nombre"
                                    name="name"
                                    className="form-control"
                                    autoComplete="off"
                                    value={ name }
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="inputBox">
                                <input 
                                    type="text"
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
                                    placeholder="Contraseña"
                                    name="password"
                                    className="form-control"
                                    value={ password }
                                    onChange={ handleInputChange }
                                />
                            </div>

                            <div className="inputBox">
                                <input 
                                    type="password"
                                    placeholder="Confirmar Contraseña"
                                    name="password2"
                                    className="form-control"
                                    value={ password2 }
                                    onChange={ handleInputChange }
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-100 btn btn-lg btn-primary my-3" 
                            >
                                Registrar
                            </button>
                        
                            <div>
                                <Link 
                                    to="/auth/login"
                                    className="link"
                                    >
                                    ¿Ya estás registrado?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
