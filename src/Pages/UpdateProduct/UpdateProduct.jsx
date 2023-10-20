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
        <div className='mx-4 '>
            <h1>Update Product</h1>
            <form onSubmit={handelUpdateProduct}>

                <div className='md:flex gap-10 my-12'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">Model name?</span>
                        </label>
                        <input type="text" name='modelName' defaultValue={modelName} placeholder="Model Name" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">price?</span>
                        </label>
                        <input type="number" name='price' defaultValue={price} placeholder="Price" className="input input-bordered w-full" />

                    </div>
                </div>
                <div className='md:flex gap-10'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">Photo Url</span>
                        </label>
                        <input type="text" name='photo' defaultValue={img} placeholder="Photo Url" className="input input-bordered w-full" />

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Rating</span>
                        </label>
                        <input type="range" name='rating' min={0} max="5" className="range bg-white range-secondary range-lg" step="" />
                        <div className="w-full flex justify-between text-xs px-2 bg-orange-400 rounded-full">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </div>
                    </div>
                </div>
                <div className='md:flex gap-10 my-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">Brand Name</span>

                        </label>


                        <select name='brandName' defaultValue={brandName} className="Brand Name h-12 outline rounded-lg  px-4">
                            <option value="toyota">Toyota</option>
                            <option value="ford">Ford</option>
                            <option value="honda">Honda</option>
                            <option value="bmw">BMW</option>
                            <option value="chevrolet">Chevrolet</option>
                            <option value="mercedes-benz">Mercedes-Benz</option>

                        </select>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">Category</span>
                        </label>
                        <input type="text" name='category' defaultValue={category} placeholder="category" className="input input-bordered w-full" />

                    </div>
                </div>
                <div className="form-control md:w-1/2 mx-auto my-12">
                    <label className="label">
                        <span className="label-text ">Details</span>

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