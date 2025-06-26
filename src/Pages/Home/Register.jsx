import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries());

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordPattern.test(password)) {
            setErrorMessage("Password must have one uppercase, one lowercase & be at least 6 characters.");
            return;
        }
        setErrorMessage("");

        const userInfo = { email, ...rest };

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
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
        <div className="flex justify-center items-center py-10 bg-base-200 ">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="form-control w-full">
                        <h1 className="text-xl md:text-3xl text-center mb-3 font-bold">Please Register</h1>

                        <label className="label text-inherit">Name</label>
                        <input type="text" className="input input-bordered" name="name" placeholder="Your Name" required />

                        <label className="label text-inherit">Photo URL</label>
                        <input type="text" className="input input-bordered" name="photoURL" placeholder="Photo URL" required />

                        <label className="label text-inherit">Email</label>
                        <input type="email" className="input input-bordered" name="email" placeholder="Email" required />

                        <label className="label text-inherit">Password</label>
                        <input type="password" className="input input-bordered mb-2" name="password" placeholder="Password" required />

                        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

                        <button
                            type="submit"
                            className="btn btn-block font-bold mb-2 "
                            style={{ backgroundColor: "#6c8da7", color: "#fff" }}
                        >
                            Register
                        </button>

                        <p className="text-center">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="link link-hover underline font-semibold text-secondary"

                            >
                                Log in
                            </Link>
                        </p>
                    </form>

                    {/* Google Sign In */}
                    <button
                        onClick={handleSignInWithGoogle}
                        className="btn btn-outline mt-4"
                        style={{ color: "#040506", borderColor: "#b98db3", backgroundColor: "#fff" }}
                    >
                        <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512" className="inline mr-2">
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
