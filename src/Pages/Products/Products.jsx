import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();

    if (products.length === 0) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <h1 className='text-5xl'>No Cars Data Found !!</h1>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-12'>

            {
                products?.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;