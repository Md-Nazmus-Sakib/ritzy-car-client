import React from 'react';
import Category from './Category';

import { useState } from 'react';
import { useEffect } from 'react';

const Categories = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className='my-12 relative'>

            {
                brands.map(brand => <Category
                    key={brand._id}
                    brand={brand}
                ></Category>)
            }
        </div>
    );
};
export default Categories;