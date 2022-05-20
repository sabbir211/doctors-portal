import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { Oval } from "react-loader-spinner"
import swal from 'sweetalert';
const BookingModal = ({ bookingDetails, date, setBookingDetails }) => {
    const [loading, setLoading] = useState(false)
    const { name, slots } = bookingDetails
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const formatedDate = format(date, "PP")
    const onSubmit = (data) => {
        setLoading(true)
        const slot = data.slot
        const phone = data.phone
        const email = user.email
        const userName = user.displayName
        const info = { slot, phone, name, email, userName, date: formatedDate }
        fetch("http://localhost:5000/treatment", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    console.log("success");
                    swal("Treatment", "Treatment booked successfully", "success")
                }
                else {
                    console.log("faild");
                    swal("Treatment", "Treatment Already booked", "error")

                }
            })

        setBookingDetails(null)
        setLoading(false)
    };
    if (loading) {
        return <Oval color="red" width={200} height={200} />

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box ">
                    <h3 className="font-bold text-lg text-secondary">Selected Treatment: {name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 justify-items-center gap-2'>
                        <input disabled type="text" defaultValue={formatedDate} className="focus:outline-none input input-bordered w-full max-w-xs my-1 " />

                        <input disabled type="text" className="focus:outline-none input input-bordered w-full max-w-xs my-1" value={user.displayName} />
                        <input disabled type="email" className="focus:outline-none input input-bordered w-full max-w-xs my-1" value={user.email} />
                        <select {...register("slot", { required: true })} className="focus:outline-none select select-bordered w-full max-w-xs"
                            placeholder={slots && slots[0]}
                        >

                            {
                                slots && slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input {...register("phone", { required: true })} type="number" placeholder="Phone Number" className="focus:outline-none input input-bordered w-full max-w-xs my-1" />
                        <input type="submit" value="Submit" className="btn w-full max-w-xs my-1" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;