import React from 'react';

const Numbers = ({mainText, subText}) => {
    return (
        <div className='space-y-2 text-center'>
            <h1 className='text-5xl font-bold'>{mainText}</h1>
            <h3 className='font-medium text-primary-green'>{subText}</h3>
        </div>
    );
};

export default Numbers;