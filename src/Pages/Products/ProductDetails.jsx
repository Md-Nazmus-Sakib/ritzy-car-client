import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    const { _id, modelName, brandName, price, rating, img, description } = product;
    return (
        <div>
            <img src={img} alt="" />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
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
    );
};

export default ProductDetails;