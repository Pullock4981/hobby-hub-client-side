

// import { use } from "react";
// import { Link, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../../Contexts/AuthContext";

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   // login user info from context
//   const { logInUser, googleSignIn } = use(AuthContext);

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     logInUser(email, password)
//       .then(result => {
//         const user = result.user;
//         console.log(user);
//         form.reset();
//         navigate(location?.state || '/');
//       })
//       .catch(error => {
//         console.error(error.message);
//       });
//   };

//   const handleLoginkWithGoogle = () => {
//     googleSignIn()
//       .then(result => {
//         const user = result.user;
//         console.log(user);
//         navigate(location?.state || '/');
//       })
//       .catch(error => {
//         console.error(error.message);
//       });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: '#f2f5f7' /* your bg */ }}>
//       <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl my-7">
//         <div className="card-body">
//           <form onSubmit={handleLogin} className="form-control w-full">
//             <h1 className="text-center font-bold mb-3 md:text-3xl text-xl" style={{ color: '#040506' }}>
//               Login now!
//             </h1>

//             {/* email box */}
//             <label className="label mb-2" style={{ color: '#040506' }}>Email</label>
//             <input type="email" className="input input-bordered" name="email" placeholder="Email" />

//             {/* password box */}
//             <label className="label my-2" style={{ color: '#040506' }}>Password</label>
//             <input type="password" className="input input-bordered" name="password" placeholder="Password" />

//             <div className="my-2">
//               <a className="link link-hover" style={{ color: '#6c8da7' }}>Forgot password?</a>
//             </div>

//             {/* log in btn */}
//             <div className="flex justify-center items-center">
//               <button
//                 className="btn btn-primary btn-block font-bold mb-2"
//                 style={{ backgroundColor: '#6c8da7', borderColor: '#6c8da7', color: '#ffffff' }}
//               >
//                 Log in
//               </button>
//             </div>

//             <p style={{ color: '#040506' }}>
//               New to this site?{' '}
//               <Link to="/register" className="link link-hover underline" style={{ color: '#c3adcd', fontWeight: '600' }}>
//                 Register here
//               </Link>
//             </p>
//           </form>

//           {/* Google */}
//           <button
//             onClick={handleLoginkWithGoogle}
//             className="btn btn-outline btn-block mt-4"
//             style={{ color: '#040506', borderColor: '#b98db3', backgroundColor: '#fff' }}
//           >
//             <svg
//               aria-label="Google logo"
//               width="16"
//               height="16"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 512 512"
//               className="inline mr-2"
//             >
//               <g>
//                 <path d="m0 0H512V512H0" fill="#fff"></path>
//                 <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
//                 <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
//                 <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
//                 <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
//               </g>
//             </svg>
//             Login with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logInUser, googleSignIn } = use(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  const handleLoginkWithGoogle = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center py-10 bg-base-200 text-base-content transition-colors duration-300">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="form-control w-full">
            <h1 className="text-center font-bold mb-3 md:text-3xl text-xl">Login now!</h1>

            {/* Email */}
            <label className="label mb-2">Email</label>
            <input type="email" className="input input-bordered" name="email" placeholder="Email" required />

            {/* Password */}
            <label className="label my-2">Password</label>
            <input type="password" className="input input-bordered" name="password" placeholder="Password" required />

            <div className="my-2">
              <a className="link link-hover text-primary">Forgot password?</a>
            </div>

            {/* Login Button */}
            <button type="submit" className="btn bg-[#6C8EA7] text-white font-bold mb-2">
              Log in
            </button>

            <p className="text-center">
              New to this site?{" "}
              <Link to="/register" className="link link-hover text-secondary font-semibold underline">
                Register here
              </Link>
            </p>
          </form>

          {/* Google Login */}
          <button
            onClick={handleLoginkWithGoogle}
            className="btn btn-outline mt-4"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="inline mr-2"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
