import React, { use } from 'react';
import { Link } from 'react-router';
import AuthContext from '../Contexts/AuthContext';

const Login = () => {

    const {signInUser} = use(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(credentials => {
            console.log(credentials);
            e.target.reset();
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-[55%] flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <div className="card-body w-full">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" name='email' placeholder="Email" required />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" name='password' placeholder="Password" required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p>Already have an account ? please <Link to={'/register'} className='text-blue-400 underline'>Register</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;