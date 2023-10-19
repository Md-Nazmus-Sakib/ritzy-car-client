import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Images/Logo/logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);


    if (loading) {
        return <div className='my-32 flex justify-center items-center w-full h-screen'>
            <progress className="progress progress-secondary mx-auto w-56"></progress>
        </div>
    }

    const handelLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Log Out',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    const pages = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}>Category</NavLink></li>
        <li><NavLink to={'/addProduct'}>Add Product</NavLink></li>
        {
            user ? <div title={user?.displayName} className='flex justify-center items-center gap-4'>

                <div className="block avatar font-2xl ml-4">
                    <div className="w-12 rounded-full tooltip text-white tooltip-bottom" data-tip="hello">
                        <img src={user?.photoURL} />

                    </div>
                </div>
                <h1 className='hidden'>{user?.displayName}</h1>
                <li><Link onClick={handelLogOut}>LogOut</Link></li>
            </div> :
                <li><NavLink to={'/logLayout/login'}>Login</NavLink></li>
        }
    </>

    return (
        <div className="navbar text-xl font-bold fixed z-10 bg-opacity-70 bg-black text-white max-w-screen-xl px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {
                            pages
                        }
                    </ul>
                </div>

                <div className="btn-ghost normal-case text-xl p-2 rounded-md flex items-center">
                    <img className='w-12 h-12 sm:w-20 sm:h-20' src={logo} alt="" />
                    <h1>Ritzy Car</h1>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 uppercase">
                    {
                        pages
                    }
                </ul>
            </div>


        </div>
    );
};

export default Navbar;