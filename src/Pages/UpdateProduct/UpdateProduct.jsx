import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, modelName, brandName, category, price, rating, img, description } = product;
    const handelUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const modelName = form.modelName.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const brandName = (form.brandName.value).toLowerCase();
        const category = form.category.value;
        const details = form.details.value;
        console.log(modelName, price, photo, rating, brandName, details)
        const updateProduct = {
            brandName,
            modelName,
            category,
            price,
            rating,
            img: photo,
            description: details
        }
        console.log(updateProduct)
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Update the Product To DB',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    return (
        <div className='mx-4 text-white'>
            <h1>Update Product</h1>
            <form onSubmit={handelUpdateProduct}>

                <div className='md:flex gap-10 my-12'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Model name?</span>
                        </label>
                        <input type="text" name='modelName' defaultValue={modelName} placeholder="Model Name" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">price?</span>
                        </label>
                        <input type="number" name='price' defaultValue={price} placeholder="Price" className="input input-bordered w-full" />

                    </div>
                </div>
                <div className='md:flex gap-10'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Photo Url</span>
                        </label>
                        <input type="text" name='photo' defaultValue={img} placeholder="Photo Url" className="input input-bordered w-full" />

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Rating</span>
                        </label>
                        <input type="number" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />

                    </div>
                </div>
                <div className='md:flex gap-10 my-6'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Brand Name</span>

                        </label>
                        <select name='brandName' defaultValue={brandName} className="Brand Name h-12 rounded-lg text-white">

                            <option>Toyota</option>
                            <option>Ford</option>
                            <option>Honda</option>
                            <option>BMW</option>
                            <option>Chevrolet</option>
                            <option>Mercedes-Benz</option>
                        </select>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Category</span>
                        </label>
                        <input type="text" name='category' defaultValue={category} placeholder="category" className="input input-bordered w-full" />

                    </div>
                </div>
                <div className="form-control md:w-1/2 mx-auto my-12">
                    <label className="label">
                        <span className="label-text text-white">Details</span>

                    </label>
                    <textarea name='details' defaultValue={description} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>

                </div>
                <div className='flex justify-center my-12'>
                    <input type="submit" className="btn btn-info" value="Update Product" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;