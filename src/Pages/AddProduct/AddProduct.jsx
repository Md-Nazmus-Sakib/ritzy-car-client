import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handelAddProduct = (event) => {
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
        const product = {
            brandName,
            modelName,
            category,
            price,
            rating,
            img: photo,
            description: details
        }


        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }
    return (
        <div className='mx-4 text-white'>
            <h1>Add Product</h1>
            <form onSubmit={handelAddProduct}>

                <div className='md:flex gap-10 my-12'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Model name?</span>
                        </label>
                        <input type="text" name='modelName' placeholder="Model Name" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">price?</span>
                        </label>
                        <input type="number" name='price' placeholder="Price" className="input input-bordered w-full" />

                    </div>
                </div>
                <div className='md:flex gap-10'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered w-full" />

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Rating</span>
                        </label>
                        <input type="number" name='rating' placeholder="Rating" className="input input-bordered w-full" />

                    </div>
                </div>
                <div className='md:flex gap-10 my-6'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Brand Name</span>

                        </label>
                        <select name='brandName' className="Brand Name h-12 rounded-lg text-white px-4">

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
                        <input type="text" name='category' placeholder="category" className="input input-bordered w-full" />

                    </div>
                </div>
                <div className="form-control md:w-1/2 mx-auto my-12">
                    <label className="label">
                        <span className="label-text text-white">Details</span>

                    </label>
                    <textarea name='details' className="textarea textarea-bordered h-24" placeholder="Details"></textarea>

                </div>
                <div className='flex justify-center my-12'>
                    <input type="submit" className="btn btn-info" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;