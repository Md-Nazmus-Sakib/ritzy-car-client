import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';
import ProductImage from './ProductImage';

const Products = () => {
    const [images, setImages] = useState([]);
    const products = useLoaderData();
    const [loading, setLoading] = useState(true)

    const { brandName } = useParams();
    console.log(brandName)




    useEffect(() => {
        fetch('https://ritzy-car-server-e0pbn0umq-md-nazmus-sakib.vercel.app/images')
            .then(res => res.json())
            .then(data => {
                setImages(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }
    const brandImages = images.find(item => item.brandName === brandName)
    // console.log(brandImages)

    if (products.length === 0) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <h1 className='text-5xl'>No Cars Data Found !!</h1>
            </div>
        )
    }

    return (
        <div>
            <ProductImage brandImages={brandImages} ></ProductImage>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-12'>

                {
                    !loading && products?.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;