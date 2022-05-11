import React from 'react';
import chair from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        
            <div class="hero md:min-h-screen bg-banner-bg container mx-auto my-20">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl md:ml-28" />
                    <div className=' md:ml-10'>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="md:py-6"> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn btn-primary text-white font-semibold text-2xl bg-gradient-to-r from-secondary to-primary ">Get Started</button>
                    </div>
                </div>
            </div>
    

    );
};

export default Banner;