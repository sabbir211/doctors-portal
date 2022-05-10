import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
const Services = () => {
    const x=[
        {id:1,img:fluoride,text:"Fluoride Treatment"},
        {id:2,img:cavity,text:"Fluoride Treatment"},
        {id:3,img:whitening,text:"Fluoride Treatment"},
    ]
    return (
        <div className='container my-12 text-center mx-auto'>
            <h3 className=' text-secondary font-semibold uppercase'>Our Services</h3>
            <h2 className=" text-4xl">Services We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 ">
             {
                x.map(service=><Service service={service} key={service.id}></Service>)
            }   
            </div>
            
            
        </div>
    );
};

export default Services;