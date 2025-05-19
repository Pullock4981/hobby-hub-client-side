import React from 'react';
import logo from '../../assets/Hobby Hub.png';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
                <aside>
                    <img src={logo}
                    className='md:h-32 h-16'    alt="Hobby Hub Logo" />
                    <p className="font-bold md:text-xl">
                        HobbyHub Ltd.
                        <br />
                        Providing reliable tech since 2025
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/mahmudashik.pullock" target="_blank">
                            <FaFacebookSquare className="md:text-3xl text-xl text-amber-400" />
                        </a>
                        <a href="https://www.youtube.com/@mrashik4911" target="_blank">
                            <IoLogoYoutube className="md:text-3xl text-xl text-amber-400" />
                        </a>
                        <a href="https://github.com/Pullock4981" target="_blank">
                            <FaGithub className="md:text-3xl text-xl text-amber-400" />
                        </a>
                        <a href="https://www.linkedin.com/in/ashikpullock/" target="_blank">
                            <FaLinkedin className="md:text-3xl text-xl text-amber-400" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;