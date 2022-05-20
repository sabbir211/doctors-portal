
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './Pages/Appointment/AppointmentPage';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import swal from 'sweetalert';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/dashboard/Dashboard';
import MyReview from './Pages/dashboard/MyReview';
import Mybookings from './Pages/dashboard/Mybookings';
import Users from './Pages/dashboard/UsersList/Users';
import RequireAdmin from './Pages/Shared/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <AppointmentPage />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard>
            </Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Mybookings />} />
          <Route path='myreview' element={<MyReview />} />
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          } />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
