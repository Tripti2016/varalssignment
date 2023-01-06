import React from 'react';
import img1 from '../assets/dungeon.png'
import img2 from '../assets/Vector-2.png'
import img3 from '../assets/Vector-1.png';
import img4 from '../assets/Group.png';
import img5 from '../assets/Group2.png';
import img6 from '../assets/Group-1.png';
import img7 from '../assets/Group-2.png'


const Services = () => {
    return (
        <>
            <section className='services sectionPadding' >
                <div className="services-top">
                    <div className="services-left">
                        <h2><span>Dedicated</span>
                            to our mission we are</h2>
                        <p>Our services include Company Formation & Renewals,
                            Trust & Fiduciary, Tax Residency Setup With Family, Bank
                            Accounts, Remote Management, Stock Trading
                            Platforms, Ownership Solutions</p>
                    </div>
                    <div className="services-right">
                        <div className="services-right-box1">
                            <img src={img1} alt="" />
                            <h3>UAE Free Zone Company</h3>
                            <p>Your registration agent, will answer all
                                of your questions and help you to reach
                                a conclusion that meets your objectives
                                of investing in the UAE.</p>
                            <button>Get Started</button>
                        </div>
                        <div className="services-right-box1">
                            <img src={img2} alt="" />
                            <h3>Dubai Local Companies</h3>
                            <p>The Dubai LLC formation documents
                                are actually articles of organization or a
                                certificate of organization. You can get
                                yours today</p>
                            <button>Get Started</button>
                        </div>
                        <div className="services-right-box1">
                            <img src={img3} alt="" />
                            <h3>Offshore Compamies</h3>
                            <p>You can register an offshore company
                                and open its bank account in Dubai.
                                Your agent will help you along all the
                                process</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="services-bottom">
                    <div className="services-bottom-top">
                        <p>Learn the ways in which you can benefit
                            from a UAE/Offshore Company. Then get
                            started on fulfilling your UAE dream.</p>
                        <button>Claim a Free Quote</button>
                    </div>
                    <div className="services-bottom-box">
                        <div className="services-bottom-box1 flex-container">
                            <img src={img4} alt="" />
                            <h3>Advice & Guidance</h3>
                            <p>All activities in the UAE are licensed.
                                Whether manufacturing, finance,
                                trading, marketing, consultancy or
                                restaurants. In some countries only
                                manufacturing is licensed. In others
                                there is a threshold below which
                                business are encouraged. Get our
                                insightfull guidance today <br /><button>Learn more &rarr;</button></p>

                        </div>
                        <div className="services-bottom-box2 flex-container ">
                            <img src={img5} alt="" />
                            <h3>Bank Account Setup</h3>
                            <p>There are many banks in the United
                                Arab Emirates [UAE]. Both locally
                                owned and branches of
                                multinational ones. Foreign banks
                                adjust according to their parent s
                                strategies and have changed local
                                requirements overnight in the past.
                                But we are here to help you. <br /><button>Learn more &rarr;</button></p>

                        </div>
                        <div className="services-bottom-box3 flex-container">
                            <img src={img6} alt="" />
                            <h3>Registration Document
                                Perparation</h3>
                            <p>Several documents must be
                                prepared to start the process of
                                registering a new company in the
                                United Arab Emirates. Be it a Dubai
                                local company, a free zone one or an
                                offshore entity. Your registered
                                agent is dedicated to get this done
                                for you for a seamless process
                                <br /><button>Learn more &rarr;</button></p>

                        </div>
                        <div className="services-bottom-box4 flex-container ">
                            <img src={img7} alt="" />
                            <h3>UAE Company Visas</h3>
                            <p>Your application for visas is critical
                                especially if you intend to move to
                                Dubai. This becomes even more
                                urgent if your family will also move
                                with you. All the paperwork is done
                                on your behalf smoothly so that you
                                may only focus on doing what
                                matters most to you
                                <br />  <button>Learn more &rarr;</button></p>

                        </div>
                    </div>
                    <div className="services-bottom-top">
                        <p>We have gathered a team of 
professionals to craft adequate 
services you can rely on for a friction 
free setup in UAE.</p>
                        <button>More about our services  &rarr;</button>
                    </div>
                </div>




            </section>

        </>
    )
}

export default Services
