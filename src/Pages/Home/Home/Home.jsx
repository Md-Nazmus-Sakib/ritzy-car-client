import React from 'react';
import Banner from '../Banner/Banner';

import Categories from '../Categories/Categories';
import Peculiarity from '../../Peculiarity/Peculiarity';
import WhyChoose from './WhyChoose/WhyChoose';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Categories ></Categories>
            <Peculiarity></Peculiarity>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;