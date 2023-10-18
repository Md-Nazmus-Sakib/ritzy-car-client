import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ brand }) => {
    const { _id, brandName, brandImg, companyDetails } = brand;
    return (
        <div className='my-6'>
            <h1 className='text-5xl my-12 text-center font-extrabold uppercase'>-- {brandName} --</h1>

            <img className='w-full sticky top-0 h-[400px] ' src={brandImg} alt="" />
            <div className=' flex justify-center w-full relative z-10 -mt-36  text-white'>
                <div className='md:w-1/2 text-center bg-black p-12 rounded-xl bg-opacity-40'>
                    <h1 className='text-5xl font-bold my-6'>{brandName}</h1>
                    <p>{companyDetails}</p>
                    <Link to={`/brands/${brandName}`}> <button className="btn btn-error bg-opacity-80 my-6 text-white">Go Shop</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Category;