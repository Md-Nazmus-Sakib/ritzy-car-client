import React from 'react';
import Swal from 'sweetalert2';
import imgBg from '../../assets/Images/Banner/banner4.jpg'

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
        // console.log(modelName, price, photo, rating, brandName, details)
        const product = {
            brandName,
            modelName,
            category,
            price,
            rating,
            img: photo,
            description: details
        }


        fetch('https://ritzy-car-server-e0pbn0umq-md-nazmus-sakib.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    form.reset();
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
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${imgBg})`, backgroundSize: "cover" }} >
            <div className='mx-4'>
                <h1 className='text-3xl text-center text-white'>Add Product</h1>
                <form onSubmit={handelAddProduct}>

                    <div className='md:flex gap-10 my-12'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white ">Model name?</span>
                            </label>
                            <input type="text" name='modelName' placeholder="Model Name" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white ">price?</span>
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
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white ">Brand Name</span>

                            </label>
                            <select name='brandName' className="Brand Name h-12 rounded-lg outline px-4">

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
                                <span className="label-text text-white ">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="category" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="form-control md:w-1/2 mx-auto my-12">
                        <label className="label">
                            <span className="label-text text-white ">Details</span>

                        </label>
                        <textarea name='details' className="textarea textarea-bordered h-24" placeholder="Details"></textarea>

                    </div>
                    <div className='flex justify-center my-12'>
                        <input type="submit" className="btn btn-info" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;