import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    const { _id, modelName, brandName, price, rating, img, description } = product;

    const handelAddToCart = product => {
        const cartItem = {}
    }
    return (
        <div className='mx-4' >
            <div className='md:flex justify-between gap-6'>
                <img className='md:w-2/3 lg:flex-1' src={img} alt="" />

                <div className='md:w-1/3 justify-end' >
                    <div className="card bg-neutral text-neutral-content my-12">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-purple-500 uppercase">Model</h2>
                            <h2 className="card-title">{modelName}</h2>


                        </div>
                    </div>
                    <div className="card bg-neutral text-neutral-content my-12">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-blue-500 uppercase">Details</h2>
                            <h2 className="card-title">{description}</h2>


                        </div>
                    </div>
                    <div className="card bg-neutral text-neutral-content my-12">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-pink-500 uppercase">Price</h2>
                            <h2 className="card-title">$ {price}</h2>


                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:flex justify-center gap-6'>
                <div className="card bg-neutral text-neutral-content my-12">
                    <div className="card-body items-center text-center">
                        <button onClick={() => { handelAddToCart(product) }} className="btn btn-wide">Add to Cart</button>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;