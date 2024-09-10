import React from 'react';

const PersonalizedSection = () => {
    return (
        <div className='mt-8 md:mt-32 flex'>
            <div className='flex flex-col gap-6'>
                <h1 className='font-bold text-4xl'>Design your personalized credit card.</h1>
                <p className='text-secondary md:w-1/2'>You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary</p>
                <div>
                    <button className='flex items-center gap-4 px-8 py-4 bg-primary-green rounded-full'>
                        <h3 className='font-medium'>Create New Card</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                            <path d="M0.999817 9.75H23.4998M23.4998 9.75L16.4998 18.25M23.4998 9.75L16.4998 1.75" stroke="#EFF8F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className=''>

            </div>
        </div>
    );
};

export default PersonalizedSection;