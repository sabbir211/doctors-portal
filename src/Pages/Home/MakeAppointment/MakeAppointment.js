import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import doctorbg from '../../../assets/images/appointment.png'
import Button from '../../Shared/Button';
const MakeAppointment = () => {
    return (

        <div className=" bg-appointment-bg my-20">
            <div className="flex lg:flex-row items-center">
                <div>

                    <img src={doctor} className="md:mx-20 md:block hidden mt-[-100px] max-w-sm rounded-lg " />
                </div>
                <div className='md:pr-20 text-white p-4'>
                    <p className='text-secondary text-semibold'>Appointment</p>
                    <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>Get started</Button>
                </div>
            </div>

        </div>

    );
};

export default MakeAppointment;