import React from 'react';

const FindPerfectCard = () => {
    return (
        <div className='mt-8 md:mt-32 grid grid-cols-12'>
            <div className='col-span-6'>

            </div>
            <div className='grid grid-cols-1 gap-6 col-span-6'>
                <h1 className='font-bold text-4xl'>Find the Perfect Credit Card for You</h1>
                <p className='text-secondary md:w-2/3'>
                    Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations.
                </p>
                <div>
                    <button className='flex items-center gap-4 px-8 py-4 bg-primary-green rounded-full'>
                        <h3 className='font-medium'>Learn More</h3>
                    </button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default FindPerfectCard;