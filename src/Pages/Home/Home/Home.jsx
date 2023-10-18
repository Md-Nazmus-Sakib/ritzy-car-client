import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';

const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Categories brands={brands}></Categories>
        </div>
    );
};

export default Home;