import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const userInfo = {
            name,
            email,
            password
        }

        // console.log(userInfo)
    };
    // handel register funtion 

    return (
        <div className="hero my-12">
            <div className="hero-content flex-col justify-around lg:flex-row-reverse">
                <div className="text-center lg:text-left text-white lg:w-[40%]">
                    <h1 className="lg:text-5xl text-3xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 lg:w-[40%]">
                    <div className="card-body">
                        <form onSubmit={(e) => handelRegister(e)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full Name" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <p className='text-center mt-3'>Have you alreday an account <Link className='text-[#4A00E0] font-bold' to='/login'>Lgoin</Link></p>
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

export default Register;