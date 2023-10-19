import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        if (password.length < 6) {
            return setError('password must be gater than 6 character or longer.')
        }
        else if (!/^(?=.*[A-Z]).*$/.test(password)) {
            return setError('password must be one upper case')
        }
        else if (! /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            return setError('password must be one special Character')
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(name, photo)
                    .then(() => {
                        form.reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Register Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setLoading(false)
                        navigate('/')

                    })
                    .catch(error => {

                        setError(error.message)
                    })
            })
            .catch(error => {

                setError(error.message)
            })


    }
    return (
        <div className='bg-red-500 w-full min-h-full py-10 text-white  absolute rounded-xl flex justify-center' style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className='w-full p-6'>
                <h1 className="text-5xl text-center font-bold">Register now!</h1>
                <div className="w-full  my-6'">
                    <form onSubmit={handelRegister} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                {error && <p className='text-amber-300 rounded-md font-bold bg-white p-2'>{error}</p>}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <div className='mt-6'>
                        <h3 className='text-lg text-center'>Already Have an account please <Link to={'/logLayout/login'}><span className='font-extrabold text-amber-300'>Login</span></Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;