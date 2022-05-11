import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({date,setDate}) => {
    return (
        <div className="hero min-h-screen container mx-auto ">
            <div className="hero-content flex-col gap-4 lg:flex-row-reverse">
                <img src={chair} className="md:ml-10 max-w-sm rounded-lg shadow-2xl" />
                <div>
                   <DayPicker
                   mode="single"
                   selected={date}
                   onSelect={setDate}
                   ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;