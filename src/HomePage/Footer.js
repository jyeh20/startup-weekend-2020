import React from 'react'
import '../HomePage/Footer.css'
function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>Contact Us</h2>
                        <span>Dwelln@lmu.edu</span>
                        <span>M-F 8-5PM &amp; S-Su 9-4PM</span>
                        <span>+62 31 532-3813</span>
                    </div>
                    <div className="footer-links-items">
                        <h2>Customer Service</h2>
                        <span>Track Order</span>
                        <span>Return Center</span>
                        <span>FAQ's</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>Social Media</h2>
                        <span>Instagram</span>
                        <span>Facebook</span>
                        <span>Youtube</span>
                    </div>
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <span>How It Works</span>
                        <span>Testimonials</span>
                        <span>Careers</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
            <section className="socialmedia">
                <div className="socialmedia-wrap">
                    <div className="footer-logo">
                        <a id="footer-logo">DwellN </a>
                    </div>
                    <p className="website-rights">&copy; DwellN 2020. All rights reserved</p>
                    <div className="socialicons">
                        <a className="socialicons-link"><i className="fab fa-facebook"></i></a>
                        <a className="socialicons-link"><i className="fab fa-instagram"></i></a>
                        <a className="socialicons-link"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer