// // import React from 'react';
// // import { Link } from 'react-router';

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

// import { use, useState } from "react";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../../Contexts/AuthContext";

// const Register = () => {

//     const [errorMassage, setErrorMassage] = useState('')

//     const navigate = useNavigate();

//     // user info from context
//     const { createUser, googleSignIn } = use(AuthContext);
//     // console.log(userInfo);

//     // handle submit function
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const formData = new FormData(form);
//         const { email, password, ...rest } = Object.fromEntries(formData.entries());
//         const userInfo = {
//             email,
//             ...rest
//         };
//         console.log(email, password, userInfo);

//         // pass validation

//         // const passValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
//         // if (passValidation.test(password) === false) {
//         //     setErrorMassage(" Password must be one uppercase, one lowercase & length should be 6 character or longer")
//         //     return
//         // }


//         createUser(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 alert('User Created Successfully!')
//                 // save user info to database
//                 fetch('http://localhost:3000/users', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(userInfo),
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                         if (data.insertedId) {
//                             alert('User Created Successfully!')
//                         }
//                     })
//                 navigate('/');
//                 form.reset();
//             })
//             .catch(error => {
//                 console.error(error.message);
//                 setErrorMassage(error.message)
//             })
//     }

//     // handle sign in with google function
//     const handleSigninkWithGoogle = () => {
//         // console.log("clicked google sign in button");
//         googleSignIn()
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 alert('User Created Successfully!')
//                 navigate('/');
//             })
//             .catch(error => {
//                 console.error(error.message);
//             })
//     }

//     //pass validation
//     // const


//     return (
//         <div className='bg-[#E3F0E9] flex justify-center items-center'>
//             <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-7">
//                 <div className="card-body">
//                     <form onSubmit={handleSubmit} className="form-control w-full">
//                         <h1 className="md:text-3xl text-xl text-center mb-3 font-bold">Please Register</h1>

//                         {/* name box */}

//                         <label className="label mb-2">Name</label>
//                         <input type="text" className="input" name='name' placeholder="Your Name" />

//                         {/* photoUrl box */}

//                         <label className="label my-2">PhotoURL</label>
//                         <input type="text" className="input" name='photoURL' placeholder="Photo URL" />

//                         {/* email box */}

//                         <label className="label my-2">Email</label>
//                         <input type="email" className="input" name='email' placeholder="Email" />

//                         {/* password box */}

//                         <label className="label my-2">Password</label>
//                         <input type="password"  className="input mb-2" name='password' placeholder="Password" />
//                         {/* pattern='/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/' <div className='my-2'><a className="link link-hover">Forgot password?</a></div> */}
//                         {/* log in btn */}
//                         <div className='flex justify-center items-center'>
//                             <button className="btn btn-block bg-[#2A9261] text-white font-bold mb-2">Register</button>
//                         </div>
//                         <div>
//                             {
//                                 errorMassage &&
//                                 <p className='text-red-400 text-xs'>
//                                     Password must be one uppercase, one lowercase & length should be 6 character or longer
//                                 </p>
//                             }
//                         </div>
//                         <p>
//                             Already have an account? <Link to="/login" className="link link-hover underline text-blue-500 font-semibold">Log in</Link>
//                         </p>
//                     </form>

//                     {/* Google */}
//                     <button onClick={handleSigninkWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
//                         <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//                         Sign up with Google
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );

// };

// export default Register;


// import { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Contexts/AuthContext";
// import Swal from "sweetalert2";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries());

        // 🔒 Password Validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordPattern.test(password)) {
            setErrorMessage("Password must have one uppercase, one lowercase & be at least 6 characters.");
            return;
        }
        setErrorMessage("");

        const userInfo = {
            email,
            ...rest,
        };

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                // Save user to DB
                fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire("Success!", "User created successfully!", "success");
                            navigate("/");
                            form.reset();
                        }
                    });
            })
            .catch((error) => {
                console.error(error.message);
                setErrorMessage(error.message);
            });
    };

    const handleSignInWithGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                Swal.fire("Success!", "Signed in with Google!", "success");
                navigate("/");
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <div className="bg-[#E3F0E9] flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl my-7">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="form-control w-full">
                        <h1 className="text-xl md:text-3xl text-center mb-3 font-bold">Please Register</h1>

                        <label className="label">Name</label>
                        <input type="text" className="input" name="name" placeholder="Your Name" required />

                        <label className="label">Photo URL</label>
                        <input type="text" className="input" name="photoURL" placeholder="Photo URL" required />

                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input type="password" className="input mb-2" name="password" placeholder="Password" required />

                        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

                        <button type="submit" className="btn btn-block bg-[#2A9261] text-white font-bold mb-2">
                            Register
                        </button>

                        <p className="text-center">
                            Already have an account?{" "}
                            <Link to="/login" className="link link-hover underline text-blue-500 font-semibold">
                                Log in
                            </Link>
                        </p>
                    </form>

                    {/* Google Sign In */}
                    <button onClick={handleSignInWithGoogle} className="btn bg-white text-black border mt-4">
                        <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512">
                            <path fill="#EA4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                            <path fill="#FBBC05" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                            <path fill="#34A853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                            <path fill="#4285F4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                        </svg>
                        <span className="ml-2">Sign up with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
