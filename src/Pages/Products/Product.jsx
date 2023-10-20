import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, modelName, brandName, category, price, rating, img, description } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl min-h-[750px]">
                <figure><img className='h-[400px]' src={img} alt="cars" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Model: {modelName}
                        <div className="badge badge-secondary w-24 h-8"> {rating}  <FaStar className='text-yellow-500 ml-2'></FaStar> </div>
                    </h2>
                    <h2 className="card-title uppercase my-2">Brand: {brandName}</h2>
                    <h2 className="card-title uppercase my-2">Price: $ {price}</h2>

                    <p>Category: {category}</p>
                    <div className="card-actions flex justify-center">
                        <Link to={`/updateProduct/${_id}`}>  <button className="btn btn-wide btn-secondary">Update Product</button></Link>

                        <Link to={`/products/${_id}`} className="btn btn-error">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;