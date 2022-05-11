import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <div  >
           <footer class="footer p-10 bg-contain" style={{backgroundImage: `url('${footerBg}')`}}>
            <div>
                <span class="footer-title">Services</span>
                <p class="link link-hover">Emergency Checkup</p>
                <p class="link link-hover">Monthly Checkup</p>
                <p class="link link-hover">Weekly Checkup</p>
                <p class="link link-hover">Deep Checkup</p>
            </div>

            <div>
                <span class="footer-title uppercase">Oral Health</span>
                <a class="link link-hover">Fluoride Treatment</a>
                <a class="link link-hover">Cavity Filling</a>
                <a class="link link-hover">Teeth Whitening</a>
            </div>
            <div>
                <span class="footer-title">Our Address</span>
                <div>
                    Walia Road,Fulbari,Lalpur,Natore
                </div>
            </div>
        </footer>  
        </div>
       
    );
};

export default Footer;