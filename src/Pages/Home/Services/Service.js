import React from 'react';

const Service = ({service}) => {
    const {img,text}=service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{text}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est earum facilis repellat obcaecati sed qui, temporibus minus aspernatur debitis libero.</p>
               
            </div>
        </div>
    );
};

export default Service;