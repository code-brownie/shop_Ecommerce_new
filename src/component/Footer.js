import React from 'react'
import '../style/Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="Container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Dowload App for Android and ios mobile phone.</p>
                            <div className="app-logo">
                            <img src="./images/app-store.png" alt="logo" />
                            <img src="./images/play-store.png" alt="logo" />
                            </div>
                        </div>
                        <div className="footer-col-2">
                            <img src="images/logo_white.png" alt="footer" style={{width:"300px"}}/>
                            <p>Enabling Sustainable Consumption</p>
                            <p>and Responsible Disposal</p>
                        </div>
                        <div className="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                        
                    </div>
                    <hr />
                    <p className='copy'>Copyright 2023 - Give 4 Good</p>
                </div>
            </div>
        </>
    )
}

export default Footer