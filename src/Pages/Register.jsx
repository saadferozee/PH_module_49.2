import React, { use } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { Link } from 'react-router';

const Register = () => {

    const {createUser} = use(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(credentials => {
            console.log(name, credentials);
        } )
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-[55%] flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <div className="card-body w-full">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input w-full" name='name' placeholder="Name" required />
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" name='email' placeholder="Email" required />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" name='password' placeholder="Password" required />
                                {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                <button type='checkbox'>Accept Terms and Conditions</button>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p>Already have an account ? please <Link to={'/login'} className='text-blue-400 underline'>Login</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;