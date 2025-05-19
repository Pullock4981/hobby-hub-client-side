import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className='bg-amber-100 flex justify-center items-center'>
                <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-7">
                    <div className="card-body">
                        <form  className="form-control w-full">
                            <h1 className="md:text-3xl text-xl text-center mb-3 font-bold">Login now!</h1>

                            {/* email box */}

                            <label className="label mb-2">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />

                            {/* password box */}

                            <label className="label my-2">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            <div className='my-2'><a className="link link-hover">Forgot password?</a></div>
                            {/* log in btn */}
                            <div className='flex justify-center items-center'>
                                <button className="btn btn-block bg-amber-400 font-bold mb-2">Log in</button>
                            </div>
                            <p>
                                New to this site? <Link to="/register" className="link link-hover underline text-blue-500 font-semibold">Register here</Link>
                            </p>
                        </form>
                        {/* Google */}
                        <button  className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

// onClick={handleLoginkWithGoogle}
// onSubmit={handleLogin}