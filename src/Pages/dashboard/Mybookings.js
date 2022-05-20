import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Mybookings = () => {
    const [bookings, setbookings] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`,{
            headers:{
            authorization:`bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setbookings(data)
            })
            .catch(error=>console.log(error))
    }, [user.email])
    console.log(bookings);
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Booking time</th>
                            <th>Booking date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { bookings.length &&
                            bookings.map((b, index) => {
                             return   <tr>
                                    <th>{index}</th>
                                    <td>{user.displayName}</td>
                                    <td>{b.name}</td>
                                    <td>{b.slot}</td>
                                    <td>{b.date}</td>
                                </tr>
                            })
                        }

                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mybookings;