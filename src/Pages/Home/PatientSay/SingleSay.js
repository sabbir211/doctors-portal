import React from 'react';
import wilson from '../../../assets/images/people1.png'
const SingleSay = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className='flex gap-5 mt-7'>
                 <div className="avatar">
                    <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={wilson} />
                    </div>
                </div>   
                    <div>
                        <h4 className='text-xl font-semibold'>Winson herry</h4>
                        <p>California</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SingleSay;