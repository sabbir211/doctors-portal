import React from 'react';

const Card = ({img,topText,bodyText,bgColor}) => {
    return (
        <div className={`card lg:card-side bg-gradient-to-r ${bgColor} shadow-xl text-white p-2`}>
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{topText}</h2>
                <p>{bodyText}</p>
            </div>
        </div>
    );
};

export default Card;