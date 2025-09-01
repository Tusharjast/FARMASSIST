import React, { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

async function tt(text, sourceLang = "en", targetLang = "hi") {
      const url = `https://lingva.ml/api/v1/${sourceLang}/${targetLang}/${encodeURIComponent(text)}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.translation; // Google-quality output
    }




const Home = () => {

    tt("Where are you going").then(r => { console.log(r) })

    const [lang, setlang] = useState("english");
    return (

        <div className='home-container'>
            <Navbar lang={lang} s={setlang} />
            <div className="hero-section">
                <div className="h-left">
                    <h1>Collobrative Modern Farming and Products</h1>
                    <p>We enable farmers to access products and services on rent or at the lowest price from the large farmers community.We also allow farmers to connect to different farmers along the country for spreading and exchange of knowledge,techniue and experience</p>
                    <div className="button">
                        <button>Explore</button>
                        <button className='hb'>Contact</button>
                    </div>
                </div>
                <div className="h-right">
                    <div className="hero">
                        <img src="/hero-img1.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="services">
                <h1>All in one Place for farmers</h1>

                <div className="service-container">
                    <div className="red circle">Tools</div>
                    <div className="green circle">Seeds</div>
                    <div className="pink circle">Machines</div>
                    <div className="red circle">products</div>
                </div>

            </div>

            <div className="team">
                <h1>Meet our Team</h1>
                <div className="team-container">
                    <div className="member">
                        <img src="/tusharcopy.png" alt="" />
                        <h2>Tushar Choudhary</h2>
                        <p>Founder and CEO</p>
                    </div>

                    <div className="member">
                        <img src="/tusharcopy.png" alt="" />
                        <h2>Swayam Sachdeva</h2>
                        <p>Senior Developer</p>

                    </div>

                    <div className="member">
                        <img src="/tusharcopy.png" alt="" />
                        <h2>Tushar Chauhan</h2>
                        <p>Manager</p>
                    </div>

                    <div className="member">
                        <img src="/tusharcopy.png" alt="" />
                        <h2>Utkarsh Chauhan</h2>
                        <p>Developer and Designer</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
