import React from 'react';
import chair from '../../../assets/images/chair.png'
import Button from '../../Shared/Button';
const Banner = () => {
    return (
        
            <div className="hero md:min-h-screen bg-banner-bg container mx-auto my-20">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl md:ml-28" />
                    <div className=' md:ml-10'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="md:py-6"> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
    

    );
};

export default Banner;