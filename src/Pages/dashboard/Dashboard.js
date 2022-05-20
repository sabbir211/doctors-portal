import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user ,loading]=useAuthState(auth)
    const [admin]=useAdmin(user)
if (loading) {
    return <p>Loading...</p>
}
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                <h1 className='text-3xl text-purple-500'>Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My bookings</Link></li>
                    <li><Link to="myreview">My Reviews</Link></li>
                    {
                        admin &&<>                     
                         <li><Link to="users">All user</Link></li>
                         </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;