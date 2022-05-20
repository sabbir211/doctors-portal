import React from 'react';
import Button from '../Shared/Button';

const SingleBookingCompo = ({appointment,setBookingDetails}) => {
    const { name, slots } = appointment
    return (
        <div className="card w-96 shadow-xl">
            <div className="card-body items-center text-center ">
                <h2 className="card-title text-secondary text-xl">{name}</h2>
                <p>{slots.length!==0 ? slots[0]:<span className='text-red-400'> Sorry No Slots Available </span>}</p>
                
                <p> Available {slots.length===1? "Slot": "Slots"} {slots.length}</p>
                <div className="card-actions justify-end">
                
                <label 
                htmlFor="booking-modal"
                 disabled={slots.length >= 1? false:true} 
                 className="btn btn-primary text-white font-semibold text-xl bg-gradient-to-r from-secondary to-primary "
                 onClick={()=>setBookingDetails(appointment)}
                 >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SingleBookingCompo;