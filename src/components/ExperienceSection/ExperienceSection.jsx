import React from 'react';
import Numbers from './Numbers';

const ExperienceSection = () => {
    return (
        <div className='p-4 md:p-16 rounded-2xl mt-8 md:mt-32 bg-[#3D544D3D] grid grid-cols-1 md:grid-cols-4 justify-items-center gap-8 md:gap-0'>
            <Numbers mainText={"16y"} subText={"Experience"}></Numbers>
            <Numbers mainText={"250+"} subText={"Merchant Partner"}></Numbers>
            <Numbers mainText={"18+"} subText={"Years Experience"}></Numbers>
            <Numbers mainText={"10.2k+"} subText={"Worldwide Clients"}></Numbers>
        </div>
    );
};

export default ExperienceSection;