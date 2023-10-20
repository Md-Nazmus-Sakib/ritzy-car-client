import React, { useEffect, useState } from 'react';

import SingleCart from './SingleCart';
import Swal from 'sweetalert2';

const MyCart = () => {

    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('https://ritzy-car-server-exsea3g2u-md-nazmus-sakib.vercel.app/carts')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    const handelDelete = cart => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ritzy-car-server-exsea3g2u-md-nazmus-sakib.vercel.app/carts/${cart._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingCart = carts.filter(item => item._id !== cart._id);
                            setCarts(remainingCart);
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted to my cart.',
                                'success'
                            )
                        }
                    })


            }
        })
    }
    if (carts.length === 0) {
        return <div className='flex justify-center items-center h-screen w-full'>
            <h1 className='text-3xl'>My Cart is Empty. Please Add product to My cart.</h1>
        </div>
    }
    return (
        <div>
            {
                carts.map(cart => <SingleCart
                    key={cart._id}
                    cart={cart}
                    handelDelete={handelDelete}
                ></SingleCart>)
            }
        </div>
    );
};

export default MyCart;