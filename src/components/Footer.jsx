import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineWhatsApp} from 'react-icons/ai'
import {RiSendPlane2Fill} from 'react-icons/ri'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="footer-content">
                    <h2>Get to know the whole us and
                        more of our services</h2>
                   
                    <div className="footer-content-box">
                        <div className="footer-content-box1">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="/"> Products</a></li>
                                <li><a href="/"> Solutions</a></li>
                                <li><a href="/"> Assurance</a></li>
                                <li><a href="/"> FAQ</a></li>
                                <li><a href="/"> Working at Varal-Singhania</a></li>
                            </ul>
                        </div>
                        <div className="footer-content-box1">
                            <h3>Policies</h3>
                            <ul>
                                <li><a href="/"> Privacy Policy </a></li>
                                <li><a href="/">Terms and Conditions </a></li>

                            </ul>
                        </div>
                        <div className="footer-content-box1">
                            <h3>About</h3>
                            <ul>
                                <li> <a href="/"> About Us </a></li>
                                <li><a href="/"> Contact Us </a></li>

                            </ul>
                        </div>
                        <div className="footer-content-box1">
                            <h3>Address</h3>
                            <p>608 One Lake Plaza, Cluster T,
                                Al Sarayat Street, Jumeirah
                                Lake Towers
                                Dubai
                                United Arab Emirates</p>
                            <ul>
                                <li>Office Hours: Sunday to
                                    Thursday 8:30 AM to 6:30 PM
                                    [GMT+4]</li>
                                <li>M: +971 55 794 2016</li>
                                <li>O: +971 4 447 2061</li>
                            </ul>
                        </div>
                        <div className="footer-content-box1">
                            <h3>Subscribe Now</h3>
                            <p>Sunbscribe now to receive our
                                Newsletters about amazing
                                opportunities in Dubai</p>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-content-box2">
                        <div className="input">
                        <input type="email" name="" id="" placeholder='Enter email address' /><RiSendPlane2Fill /></div>
                        <ul className="social-icon">
                            <li><AiFillFacebook /> </li>
                            <li><AiOutlineWhatsApp /> </li>
                            <li><AiFillLinkedin /> </li>
                            <li><AiFillYoutube /> </li>

                        </ul>
                    </div>

                </div>
            </footer>


        </>
    )
}

export default Footer

