import React from 'react';
import Banner from '../Banner/Banner';

import Categories from '../Categories/Categories';
import Peculiarity from '../../Peculiarity/Peculiarity';
import WhyChoose from './WhyChoose/WhyChoose';
import { useState } from 'react';

const Home = () => {

    const [isChecked, setIsChecked] = useState(false)
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    // console.log(isChecked)
    return (
        <div className={`${isChecked ? 'bg-black text-white' : 'bg-white'}`}>
            <div className='relative'>
                <input type="checkbox" onChange={handleCheckboxChange} className="toggle toggle-lg absolute -bottom-10 right-0 z-40" />
            </div>
            <Banner></Banner>
            <Categories ></Categories>
            <Peculiarity></Peculiarity>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;