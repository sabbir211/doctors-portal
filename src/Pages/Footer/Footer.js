import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <div  className='container mx-auto'>
           <footer className="footer p-10 bg-contain" style={{backgroundImage: `url('${footerBg}')`}}>
            <div>
                <span className="footer-title">Services</span>
                <p className="link link-hover">Emergency Checkup</p>
                <p className="link link-hover">Monthly Checkup</p>
                <p className="link link-hover">Weekly Checkup</p>
                <p className="link link-hover">Deep Checkup</p>
            </div>

            <div>
                <span className="footer-title uppercase">Oral Health</span>
                <a className="link link-hover">Fluoride Treatment</a>
                <a className="link link-hover">Cavity Filling</a>
                <a className="link link-hover">Teeth Whitening</a>
            </div>
            <div>
                <span className="footer-title">Our Address</span>
                <div>
                    Walia Road,Fulbari,Lalpur,Natore
                </div>
            </div>
        </footer>  
        
        </div>
       
    );
};

export default Footer;