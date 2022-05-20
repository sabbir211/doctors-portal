import React from 'react';
import {  useQuery } from 'react-query'
import UserRow from './UserRow';

const Users = () => {
 const {data,isLoading,refetch}=useQuery("users",()=>fetch('http://localhost:5000/users',{method:"get",    
 headers:{
         authorization:`bearer ${localStorage.getItem("accessToken")}`
     }}).then(res=>res.json()))
 if(isLoading){
     return <p>loading...</p>
 }
console.log(data);
    return (
        <div>
           <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            data.map((user,index)=><UserRow  user={user} key={index} count={index} refetch={refetch}></UserRow>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;