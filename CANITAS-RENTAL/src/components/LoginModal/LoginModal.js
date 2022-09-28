import './LoginModal.scss';
import LoginForm from '../LoginForm/LoginForm';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const LoginModal = () => {

    const adminUser = {
        email:'admin@admin.com',
        password:'federo93'
    }

    const [user, setUser] = useState({name:'', email:''});
    const [error, setError] = useState('');

    const Login = details => {
        console.log(details)

        if(details.email == adminUser.email && details.password == adminUser.password) {
            setUser({name:'Rocio', email: details.email})
        } else {
            /* Hacer logica condicional para avisar si le erra al pass, al user o a las 2 */
            (details.email != adminUser.email) ? setError('Invalid Email') : setError('Invalid Password')
        }
    }

    const Logout = () => {
        setUser({email:''})
    }

    return (
        <Container className='ModalContainer'>
            <input type="checkbox" id="btn-modal"></input>
                <label htmlFor="btn-modal" className="lbl-modal"> Login </label>

            <div className="ModalOpen">
                <div className="contenedor">
                    <label className='lbl-contenedor' htmlFor="btn-modal">X</label>
                    <div className='ImageAndForm'>
                        <img className='LoginImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/v1663006213/CANITAS%20RENTAL/pexels-trace-hudson-6056787_nt4gls.jpg'></img>
                        <div className='ModalText'>
                            {(user.email != '') ? (
                                <div className='LoginModalWelcomeWrapper'>
                                    <h5 className='LoginModalWelcomeMessage'> Welcome <span className='LoginModalWelcomeName'>{user.name}</span></h5>
                                    <button className='LogoutButton' onClick={Logout}>Logout</button>
                                </div>
                            ): (
                                <LoginForm Login={Login} error={error} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LoginModal;