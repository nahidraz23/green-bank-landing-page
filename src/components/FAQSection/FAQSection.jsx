import React from 'react';

const FAQSection = () => {
    return (
        <div className='mt-8 md:mt-32'>
            <div>
                <h1 className='text-3xl font-bold text-center'>FAQs</h1>
            </div>
            <div className='mt-8 md:mt-28 grid grid-cols-1 justify-items-center'>
                <div className='space-y-4'>
                    <h3 className='text-2xl font-bold'>What credit score do I need to apply for a credit card?</h3>
                    <p className='md:w-2/3'>The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;