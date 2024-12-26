import Lottie from 'lottie-react';
import loginLottieData from '../../assets/lottie/login.json'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from '../../context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then((result) => {
                e.target.reset();
                navigate('/')
                toast.success("User Sign In Succefully")
            })
            .catch((error) => {
                toast.warning("Email or Password is incorrect")
            })
    }

    const handleGoogleSignIn= ()=> {
        signInWithGoogle()
            .then((result)=>{
                navigate('/')
                toast.success("User Sign In Succefully");
            })    
            .catch((error)=>{
                toast.warning("Email or Password is incorrect")
            })
    }

    return (
        <div className="hero min-h-screen py-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className='lg:w-96 w-60'>
                        <Lottie animationData={loginLottieData}></Lottie>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h1 className="lg:text-4xl text-xl font-bold text-center">Login now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered text-blue-800" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered text-blue-800" required />
                            <div onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-2 top-12'>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-teal-900 hover:bg-teal-600 text-white">Login</button>
                        </div>
                        <p>You have any account please <Link to='/register' className="text-teal-600">Register</Link></p>
                    </form>
                    <div className="text-center mb-6">
                        <div onClick={handleGoogleSignIn} className="btn bg-blue-600 border-none text-white px-20 text-center hover:bg-teal-600">Google</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;