import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import swal from 'sweetalert';
import BookingModal from '../BookingModal';
import SingleBookingCompo from '../SingleBookingCompo';
import {  useQuery } from 'react-query'

const AvailableAppointments = ({ date }) => {

    const [bookingDetails, setBookingDetails] = useState({})
    const formattedDate = format(date, "PP")
    // const [appointment, setAppointment] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setAppointment(data)
    //         })
    // }, [formattedDate])
    // console.log(appointment);
const {isLoading, error, data:appointment}=useQuery(["available",formattedDate],()=>fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
)
if(isLoading){
    return <p>Loading...</p>
}
if (error) {
    console.log(error);
}
    return (
        <div className='container mx-auto'>
            <h2 className='text-secondary text-center text-xl md:my-20 my-12'>Available appointment on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 '>
                {
                    appointment?.map(appointment => <SingleBookingCompo setBookingDetails={setBookingDetails} appointment={appointment} key={appointment._id}></SingleBookingCompo>)
                }
            </div>
            {bookingDetails &&
                <BookingModal bookingDetails={bookingDetails} date={date} setBookingDetails={setBookingDetails}></BookingModal>}

        </div>
    );
};

export default AvailableAppointments;