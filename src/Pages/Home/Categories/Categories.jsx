import React from 'react';
import Category from './Category';
import img from '../../../assets/Images/Banner/banner3.jpeg'

const Categories = ({ brands }) => {
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