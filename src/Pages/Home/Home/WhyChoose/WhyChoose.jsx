import React from 'react';
import img1 from '../../../../assets/Why choose icon/all-brand.png'
import img2 from '../../../../assets/Why choose icon/free-support.png'
import img3 from '../../../../assets/Why choose icon/affordable.png'
import img4 from '../../../../assets/Why choose icon/electric.png'
import bgImg from '../../../../assets/Images/Banner/banner3.jpeg'

const WhyChoose = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${bgImg})`, backgroundSize: "cover" }} className='my-12 min-h-screen text-white p-6 '>
            <div className='pt-20'>
                <h1 className='text-5xl py-8 border-y-2 border-orange-400 text-center my-6'>Why Choose US</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-justify'>
                    <div>
                        <img className='w-24 mx-auto h-24' src={img1} alt="" />
                        <h1 className='uppercase text-3xl border-b border-orange-400 text-center my-6 pb-4'>All Brands</h1>
                        <p>The identity and focus of each car brand, but each manufacturer offers a diverse range of models to cater to various preferences and needs.</p>
                    </div>
                    <div>
                        <img className='w-24 mx-auto h-24' src={img2} alt="" />
                        <h1 className='uppercase text-3xl border-b border-orange-400 text-center my-6 pb-4'>Free Support</h1>
                        <p>Comprehensive assistance and maintenance services provided at no extra cost, ensuring peace of mind and reliability for car owners.</p>
                    </div>
                    <div>
                        <img className='w-24 mx-auto h-24' src={img3} alt="" />
                        <h1 className='uppercase text-3xl border-b border-orange-400 text-center my-6 pb-4'>Affordable</h1>
                        <p>Quality and reliability without breaking the bank, making dependable transportation accessible to everyone.</p>
                    </div>
                    <div>
                        <img className='w-24 mx-auto h-24 ' src={img4} alt="" />
                        <h1 className='uppercase text-3xl border-b border-orange-400 text-center my-6 pb-4'>Auto Electric</h1>
                        <p>Advanced electrical systems and components, enhancing vehicle performance, safety, and connectivity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;