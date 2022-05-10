import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import doctorbg from '../../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <div className='py-20 my-20 '>
            <div class="hero bg-appointment-bg">
                <div class="hero-content flex-col lg:flex-row ">
                    <img src={doctor} class="md:mx-20 max-w-sm rounded-lg " />
                    <div className='md:pr-20 text-white'>
                        <p className='text-secondary text-semibold'>Appointment</p>
                        <h1 class="text-5xl font-bold">Make an appointment Today</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary bg-gradient-to-r to-primary from-secondary text-semibold text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MakeAppointment;