import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { ContextBDFood } from '../../ContextProvider/ContextProvider';

const Login = () => {
    const { userLogin } = useContext(ContextBDFood);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(() => {

                fetch('https://bd-ecomere-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ email })
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', JSON.stringify(data.token));
                        toast.success("Loggedin Success");
                        form.reset();
                        navigate('/');
                    })
            })
            .catch(error => setError(error.message));
    };
    // handel register funtion 
    return (
        <div className="hero mt-8">
            <div className="hero-content flex-col justify-around lg:flex-row-reverse">
                <div className="text-center lg:text-left text-white lg:w-[40%]">
                    <h1 className="lg:text-5xl text-3xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 lg:w-[40%]">
                    <div className="card-body">
                        <form onSubmit={(e) => handelLogin(e)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <p className='text-center font-semibold text-red-600'>{error}</p>
                            <p className='text-center mt-3'>You havn't an account <Link className='text-[#4A00E0] font-bold' to='/register'>Register</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;