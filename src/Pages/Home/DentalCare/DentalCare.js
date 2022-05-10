import React from 'react';
import dentalCare from "../../../assets/images/treatment.png"
const DentalCare = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">
                <img src={dentalCare} class="max-w-sm rounded-lg shadow-2xl md:mx-24" />
                <div className=' md:mr-32'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-semibold ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;