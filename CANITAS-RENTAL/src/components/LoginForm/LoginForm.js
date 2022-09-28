import './LoginForm.scss'
import React, { useState } from 'react'

function LoginForm({ Login, error }) {

    const[details, setDetails] = useState({email:'', password:''});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
    <form className='LoginForm' onSubmit={submitHandler}>
        <div className='LoginFormDiv'>
            <h6 className='LoginFormTitle'>Sign In</h6>
            {(error != '') ? (<div className='LoginFormError'>{error}</div>) : ""}

            <div className='LoginFormGroup'>
                <input className='CustomField' type='email' name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                <label className='Placeholder' htmlFor='email'>Email</label>
            </div>

            <div className='LoginFormGroup'>
                <input className='CustomField' type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                <label className='Placeholder' htmlFor='password'>Password</label>
            </div>
            <input className='LoginButton' type='submit' value='Log In'/>
        </div>
    </form>
    )
}

export default LoginForm;