import React from 'react';
import Card from './Card';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"
const Cards = () => {
   
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 container mx-auto">
            <div>
            <Card img={clock} topText={"Opening hour"} bodyText={"morning 9o'clock to night 9o'clock "} bgColor={'to-primary from-secondary'}></Card>
            </div>
            <div>
            <Card img={marker} topText={"Our Location"} bodyText={"Walia road ,fulbari ,lalpur, natore"} bgColor={'to-accent from-accent'}></Card>
            </div>
            <div>
            <Card img={phone} topText={"Contact us now"} bodyText={"+8801756035663"} bgColor={'to-primary from-secondary'}></Card>
            </div>
        </div>
    );
};

export default Cards;