import React from 'react';
import SingleSay from './SingleSay';
import quote from '../../../assets/icons/quote.svg'
const PatientSay = () => {
    return (
        <div className='container mx-auto ' >

            <div className='flex justify-between '>
                <div>
                    <h1 className='text-secondary font-semibold text-xl' >Testimonial</h1>
                 <h1 className='text-4xl pb-32'>What our patient say</h1>
                </div>
                <div>
                    <img src={quote} alt="quote" className='md:w-40 w-20' />
                </div>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

                <SingleSay></SingleSay>
                <SingleSay></SingleSay>
                <SingleSay></SingleSay>
            </div>
        </div>
    );
};

export default PatientSay;