import React from 'react';
import icon1 from '../../assets/icon/sales-icon-0.png'
import icon2 from '../../assets/icon/1260918.png'
import icon3 from '../../assets/icon/7482272.png'
import icon4 from '../../assets/icon/2587150.png'

const Peculiarity = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-justify mx-4 my-12'>
                <div>
                    <img className='w-1/2 mx-auto' src={icon1} alt="" />
                    <div>
                        <h1 className='text-3xl text-center my-6'>Results Driven </h1>
                        <p>Results-driven means having a clear focus on achieving specific objectives, being accountable for the outcomes, and continuously seeking ways to improve efficiency and effectiveness in order to reach those objectives. </p>
                    </div>
                </div>
                <div>
                    <img className='w-1/2 mx-auto' src={icon2} alt="" />
                    <div>
                        <h1 className='text-3xl text-center my-6'>Proven Technology </h1>
                        <p>Proven technology in cars refers to the integration of tried-and-tested features and components that have a history of reliability and performance. This approach ensures that vehicles are safe, efficient, and capable of meeting the demands of modern drivers.</p>
                    </div>
                </div>
                <div>
                    <img className='w-1/2 mx-auto' src={icon3} alt="" />
                    <div>
                        <h1 className='text-3xl text-center my-6'>Winning Culture </h1>
                        <p> Winning culture in the automotive industry is built on a foundation of customer-centric values, innovation, quality, teamwork, ethics, and a commitment to continuous improvement. </p>
                    </div>
                </div>
                <div>
                    <img className='w-1/2 mx-auto' src={icon4} alt="" />
                    <div>
                        <h1 className='text-3xl text-center my-6'>Top Performance</h1>
                        <p> Top performance in cars encompasses various factors, including powerful engines, precise handling, advanced technology, and meticulous design, resulting in a thrilling and dynamic driving experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peculiarity;