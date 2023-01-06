import React from 'react'
import { FaSearch, FaPlayCircle } from 'react-icons/fa';
import img1 from '../assets/ILLUSTRATION.png';






const Header = () => {
    return (
        <>
            <div className="header sectionPadding">
             
                <section className="header-content">
                    <form className='search' action="">
                        <input type="text" />
                        <div className="searchDeatils">

                            <FaSearch />
                            <h3>Search a <span>Term  </span><span>  Topic</span></h3>

                        </div>
                    </form>
                    <div className="header-content-box">
                        <div className="header-content-left">
                            <h3>Claim a Free Quote</h3>
                            <h1><span>Get started</span> on fulfilling your Dubai or UAE dream </h1>
                            <h3>UAE & Offshore Company</h3>
                            <p>We provide you with information about UAE or
                                Offshore Company Registration & help you
                                setup your company with a bank account and
                                visas.</p>
                            <div className="header-content-left-button">
                                <button>Start a Company</button>
                                <button>Renew a Company</button>

                            </div>
                        </div>
                        <div className="header-content-right">

                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="header-content-video">
                        <p>
                            Watch the video about UAE or Offshore Company Registration
                        </p>

                        <FaPlayCircle />

                    </div>

                </section>

            </div>
        </>
    )
}

export default Header
