import React from 'react';

const Card = ({img,topText,bodyText,bgColor}) => {
    return (
        <div class={`card lg:card-side bg-gradient-to-r ${bgColor} shadow-xl text-white p-2`}>
            <figure><img src={img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{topText}</h2>
                <p>{bodyText}</p>
            </div>
        </div>
    );
};

export default Card;