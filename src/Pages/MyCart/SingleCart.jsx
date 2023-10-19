import React from 'react';
import Swal from 'sweetalert2';

const SingleCart = ({ cart, handelDelete }) => {
    const { _id, userName, userEmail, productId, productModel, brand, productImg, productPrice } = cart;



    return (
        <div className='flex gap-10 my-10 border justify-center rounded-xl'>
            <div className="card bg-neutral text-neutral-content md:w-1/2">
                <div className="card-body items-center text-center">
                    <img src={productImg} alt="" />
                </div>
            </div>
            <div className="card bg-neutral text-neutral-content md:w-1/2">
                <div className="card-body items-center text-center">
                    <h2 className="card-title uppercase">{brand}</h2>
                    <h2 className="card-title">Model: {productModel}</h2>
                    <h2 className="card-title">Price: ${productPrice}</h2>

                    <div className="card-actions justify-end">
                        <button onClick={() => handelDelete(cart)} className="btn btn-primary">Delete from Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;