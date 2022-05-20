import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import ContactUs from './Contact/ContactUs';
import DentalCare from './DentalCare/DentalCare';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import PatientSay from './PatientSay/PatientSay';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <PatientSay></PatientSay>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;