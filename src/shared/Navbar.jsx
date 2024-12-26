
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import logo_icon from '../assets/logo_icon.png'
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("Successful sign out")
            })
            .catch(error => {
                toast.warning("sign out Error")
            })
    }

    return (
        <div className="navbar p-0">
            <div className="navbar-start">
                <div className="dropdown z-40">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow z-999">
                        <li><NavLink to='/' className="text-cyan-500">Home</NavLink></li>
                        <li><NavLink to='/services' className="text-cyan-500">Services</NavLink></li>
                        {
                            user ? 
                            <li>
                            <a className="text-cyan-500">Dashboard</a>
                            <ul className="p-2 z-40">
                                <li><NavLink to='/addService' className="text-cyan-500">Add Service</NavLink></li>
                                <li><NavLink to='/manageServices' className="text-cyan-500">Manage Service</NavLink></li>
                                <li><NavLink to='/bookedServices' className="text-cyan-500">Booked-Services</NavLink></li>
                                <li><NavLink to='/serviceTodo' className="text-cyan-500">Service-To-Do</NavLink></li>
                            </ul>
                        </li>
                        : <></>
                        }
                    </ul>
                </div>
                <Link to='/' className="flex items-center"><img src={logo_icon} alt="" className='w-16' /> <span className='md:text-2xl text-sm font-bold'>HOME SERVICE</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/services'>Services</NavLink></li>
                    {
                        user ? 
                        <li>
                        <details>
                            <summary>Dashboard</summary>
                            <ul className="p-2 w-40 z-40">
                                <li><NavLink to='/addService' className="text-cyan-500">Add Service</NavLink></li>
                                <li><NavLink to='/manageServices' className="text-cyan-500">Manage Service</NavLink></li>
                                <li><NavLink to='/bookedServices' className="text-cyan-500">Booked-Services</NavLink></li>
                                <li><NavLink to='/serviceTodo' className="text-cyan-500">Service-To-Do</NavLink></li>
                            </ul>
                        </details>
                    </li>
                    :<></>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex items-center gap-3">
                        <div className="tooltip tooltip-left" data-tip={user.displayName}>
                            <div className="w-12 h-12 rounded-full"><img src={user.photoURL} alt="" className="rounded-full w-full h-full" /></div>
                        </div>
                        <a onClick={handleSignOut} className="btn bg-red-500 text-white hover:bg-red-900 border-none">Logout</a>
                    </div>
                        : <><NavLink to="/login" className="btn bg-cyan-600 border-none hover:bg-cyan-800 text-white mr-2">Log-in</NavLink>
                          </>
                }
            </div>
        </div>

    );
};

export default Navbar;