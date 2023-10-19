import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext);

    const { _id, modelName, brandName, price, rating, img, description } = product;

    const handelAddToCart = (product) => {
        const cartItem = { userName: user?.displayName, userEmail: user?.email, productId: _id, productModel: modelName, brand: brandName, productImg: img, productPrice: price }
        console.log(cartItem)
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product Added on the Cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => console.log(error))

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