import React from 'react';
import formBg from '../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <div
            className='my-12 p-14 text-center text-xl font-semibold'
            style={{ backgroundImage: `url(${formBg})` }}
        >
            <h1 className='text-secondary'>Contact US </h1>
            <h3 className='text-4xl text-white my-5'>Stay connected to us</h3>
            <form>
                <input type="text" placeholder="Email Address" className=" my-2 input w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Subject" className=" my-2 input w-full max-w-xs" />
                <br />
                <textarea class="textarea" placeholder="Your message" className='w-full max-w-xs rounded p-4 focus:outline-none' rows="4"></textarea>
                <br />
                <input type="submit" value="Submit" className='my-5 px-8 text-white py-0 capitalize  bg-gradient-to-r from-secondary to-primary btn btn-primary' />
            </form>
        </div>
    );
};

export default ContactUs;