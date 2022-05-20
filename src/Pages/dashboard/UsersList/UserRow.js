import React from 'react';
import { useQuery } from 'react-query';
import swal from 'sweetalert';

const UserRow = ({ user, count, refetch }) => {
    const email = user?.email
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal('Make admin', "making admin successfull ", "success")
                    refetch()
                }

               else{
                   swal("sorry","You can not make admin","error")
               }
            })
    }

    return (
        <tr>
            <th>{count}</th>
            <td>{email}</td>
            <td>{user?.role !== "admin" && <button class="btn btn-xs" onClick={handleMakeAdmin}>make admin</button>}</td>
            <td><button class="btn btn-xs">delete user</button></td>
        </tr>
    );
};

export default UserRow;