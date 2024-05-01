import React from 'react';
import Helmet from '../components/Helmet';
import Breadcrumb from '../components/Breadcrumb';
import '../assets/css/button.css'

const Contact = () => {
    return (
        <Helmet title="Contact">
            <Breadcrumb title="Contact" link="Contact" slug="/contact" />
            <div className="checkout">
                <div className="checkout__left">
                    <h2>Contact Us </h2>
                    <form className="checkout__left__form">
                        <div className="checkout__left__form__group">
                            <div className="first">
                                <label>First Name</label>
                                <input type="text" min={1}/>
                            </div>
                            <div className="second">
                                <label>Last Name</label>
                                <input type="text" min={1}/>
                            </div>
                        </div>
                        <div className="checkout__left__form__group">
                            <div className="first">
                                <label>Phone</label>
                                <input type="text" min={1}/>
                            </div>
                            <div className="second">
                                <label>Email</label>
                                <input type="text" min={1}/>
                            </div>
                        </div>
                        <div className="checkout__left__form__done">
                            <label>Message</label>
                            <input type="text" min={1}/>
                        </div>
                        <button type="submit" className="custom-button">Send Message</button>
                    </form>
                </div>
                <div className="checkout__right">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.2118169704663!2d106.69185723139088!3d10.85534833074461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752838bb35606d%3A0x45677c80bb3326d3!2zNzkvMUcgVOG7lSAyMCBLUDEsIEFuIFBow7ogxJDDtG5nLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1714502823557!5m2!1svi!2s"
                        width="600"
                        height="400" 
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </Helmet>
    );
};

export default Contact;
