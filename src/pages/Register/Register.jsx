import Lottie from 'lottie-react';
import registrationLottieData from '../../assets/lottie/registration.json'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from '../../context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.init';

const Register = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.warning('Password must an uppercase, a lowercase and must be at least six character');
            return;
        }

        createUser(email, password)
            .then((result) => {
                toast.success("Create user Successfully")

                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        e.target.reset();
                        navigate('/')
                    })
            })
            .catch((error) => {
                toast.warning("Create user Error");
            })
    }


    return (
        <div className="hero min-h-screen py-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className='lg:w-96 w-60'>
                        <Lottie animationData={registrationLottieData}></Lottie>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleRegister}>
                        <h1 className="lg:text-4xl text-xl font-bold text-center text-black">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered text-blue-800" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered text-blue-800" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered text-blue-800" required />
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
                            <button className="btn bg-teal-900 hover:bg-teal-600 text-white">Register</button>
                        </div>
                        <p>You have any account please <Link to='/login' className="text-teal-600">Login</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;