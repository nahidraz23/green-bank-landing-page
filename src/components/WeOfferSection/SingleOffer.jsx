import React from 'react';

const SingleOffer = ({image, mainText, subText}) => {
    return (
        <div className='flex gap-6'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='space-y-2'>
                <h1 className='text-2xl font-medium'>{mainText}</h1>
                <h3 className='text-secondary'>{subText}</h3>
            </div>
        </div>
    );
};

export default SingleOffer;