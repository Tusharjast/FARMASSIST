import React from 'react'

const Footer = () => {
    return (
        <div className="footer">

            <div className="about">
                <div className="left">
                    <div className="logo">
                        <img src="logo.PNG" alt="" />
                    </div>
                    <h1>FARMASSIST</h1>
                </div>
                <p>Leading Farmers marketplace and connectio platrofm . Enabling farmers to addopt the best practices </p>
                <div className="contacts">
                    <div className="whatsapp">
                        <img src="/whatsapp.PNG" alt="" />
                    </div>
                    <div className="linkedin">
                        <img src="/linkedin.png" alt="" />
                    </div>
                    <div className="yt">
                        <img src="" alt="" />
                    </div>
                </div>

            </div>
            <div className="links">
                <h1><a href="">About-us</a></h1>
                <h1><a href="">Contact</a></h1>
                <h1><a href="">Products</a></h1>
            </div>
            <div className="address">
                <h1>Location</h1>
                <p>24 Dastoi , Haput Uttar Pradesh India</p>
                <h1>Email</h1>
                <p>tusharchoudhary789987@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer
