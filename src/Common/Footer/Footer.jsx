import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/Images/Logo/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-black text-primary-content">
                <aside>
                    <img className='w-20 h-20' src={logo} alt="" />
                    <p className="font-bold">
                        Ritzy Car Ltd. <br />Providing reliable tech since 1992
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://twitter.com/"><FaTwitter></FaTwitter></a>
                        <a href="https://www.youtube.com/"><FaYoutube></FaYoutube></a>
                        <a href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>

                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;