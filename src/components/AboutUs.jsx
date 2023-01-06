import React from 'react';
import { AiOutlineWifi ,AiOutlineUser } from 'react-icons/ai'

const AboutUs = () => {
    return (
        <>
            <section className='aboutUs sectionPadding'>
                <div className="aboutUs-blogs">
                    <h2>Read about our blogs for more
                        information on our processes</h2>
                    <div className="aboutUs-blog-box">
                        <div className="aboutUs-blog-box1">
                           <div className="icon">

                            <AiOutlineWifi />
                           </div>
                
                            <h3>How to start a company
                                formation in Dubai <br/> <span> 5 Minutes</span></h3>
                        </div>
                        <div className="aboutUs-blog-box1 active-blog">
                           <div className="icon">

                            <AiOutlineWifi />
                           </div>
                
                            <h3>How to start a company
                                formation in Dubai <br/> <span> 5 Minutes</span></h3>
                        </div>
                        <div className="aboutUs-blog-box1">
                           <div className="icon">

                            <AiOutlineWifi />
                           </div>
                
                            <h3>How to start a company
                                formation in Dubai <br/> <span> 5 Minutes</span></h3>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="aboutUs-blogs review">
                    <h2>Satidfied We are When Our 
Customers Are Happy</h2>
                    <div className="aboutUs-blog-box review-box">
                        <div className="aboutUs-blog-box1 review-box1">
                           <div className="icon">

                           <AiOutlineUser />
                           </div>
                
                            <p><q> I am very happy with them. I’ll 
continue to use their services in 
future & highly recommend them 
to anyone.</q> <br/> <span> Muhib Abrar</span></p>
                        </div>
                        <div className="aboutUs-blog-box1 review-box1">
                           <div className="icon">

                           <AiOutlineUser />
                           </div>
                
                            <p><q>Rama has a high level of integrity, 
intellect, knowledge of his 
business, resourcefulness and 
humanity,</q> <br/> <span> Colin Saldahna</span></p>
                        </div>
                        <div className="aboutUs-blog-box1 review-box1">
                           <div className="icon">

                           <AiOutlineUser />
                           </div>
                
                            <p><q>Your advise was so complete that I 
actually realized how beneficial 
this would be to my clients and my 
business.</q> <br/> <span>Mark Swann</span></p>
                        </div>
                    </div>
                </div>
                </section>

        </>
    )
}

export default AboutUs
