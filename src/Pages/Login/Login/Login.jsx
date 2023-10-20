import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signIn, setLoading, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.form?.pathname || '/';
    // console.log(from)
    const handelSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const displayUser = result.user;
                console.log(displayUser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
                setError(error.message)
            })
    }

    const handelGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoading(false)
                setError(error.message)
            })
    }
    return (
        <div className='bg-yellow-500 w-full min-h-full py-10  absolute rounded-xl flex justify-center' style={{ backfaceVisibility: 'hidden' }}>
            <div className='w-full p-6'>
                <h1 className="text-5xl text-center font-bold">Login now!</h1>
                <div className="w-full  my-6'">
                    <form onSubmit={handelSignIn} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered " required />
                            <label className="label">
                                {error && <p className='text-red-600 rounded-md font-bold bg-white p-2'>{error}</p>}
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='mt-6'>
                        <h3 className='text-lg text-center'>Don't Have an account please <Link to={'/logLayout/register'}><span className='font-extrabold text-red-600'>Register</span></Link></h3>
                    </div>
                    <div className='mb-8 text-center'>
                        <button onClick={handelGoogleLogIn} className='border-4 border-red-500 rounded-full me-2' >
                            <h1 className='me-4 text-white'><span className="btn btn-circle btn-outline bg-rose-500 text-white"> <FaGoogle></FaGoogle></span>  Google Sign in</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;