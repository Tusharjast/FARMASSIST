import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const Home = () => {


    const [lang, setlang] = useState("english");

    useGSAP(() => {
        gsap.fromTo("#man",
            { y: 400 },
            {
                y: 0,
                duration: 0.7,
            })

        gsap.fromTo(".h-left",
            { x: -400 },
            {
                x: 0,
                duration: 0.7,
            })


        gsap.fromTo(".srv",
            { x: -500,opacity:0},
            {
                x: 0,
                opacity: 1,
                stagger:1,
                duration: 5,
                scrollTrigger: {
                    trigger: ".srv",
                    start: "top 70%",   
                    end: "top 30%",     
                    scrub: true,
                    // markers:true     
                }
            }
        );

        gsap.fromTo(".member",
            { x:-400,opacity:0},
            {
                opacity:1,
                x: 0,
                duration: 0.4,
                scrollTrigger: {
                    trigger: ".member",
                    scrub:true,
                    start:"top 140%",
                    end: "top 30%",     
                    // markers:true     
                }
            }
        );


    })




    return (

        <div className='home-container'>

            <Navbar lang={lang} s={setlang} />

            <div className="hero-section">
                <div className="h-left">
                    <h1>{lang == "english" ? "Collobrative" : "सहयोगात्मक"}</h1>
                    <h1>{lang == "english" ? "Modern Farming" : "आधुनिक खेती"}</h1>
                    <h1>{lang == "english" ? "and Products" : "और उत्पाद"}</h1>


                    <p>{lang == "english" ? "We enable farmers to access products and services on rent or at the lowest price from the large farmers community.We also allow farmers to connect to different farmers along the country for spreading and exchange of knowledge,techniue and experience" : "हम किसानों को बड़े किसान समुदाय से किराए पर या न्यूनतम कीमत पर उत्पाद और सेवाएं प्राप्त करने में सक्षम बनाते हैं। हम किसानों को ज्ञान, तकनीक और अनुभव के प्रसार और आदान-प्रदान के लिए देश भर के विभिन्न किसानों से जुड़ने की भी अनुमति देते हैं।"}</p>
                    <div className="button">
                        <button onClick={() => { location.href = "/Explore" }}>{lang == "english" ? "Explore" : "खोजना"}</button>
                        <button onClick={()=>{location.href="/Crop"}} className='hb'>{lang == "english" ? "Add products" : "संपर्क"}</button>
                    </div>


                </div>
                <div className="h-right">
                    <div className="hero">
                        <img id='man' src="/f3.png" alt="" />
                    </div>
                </div>

                <div className="bg">
                    <div className="cvr"></div>


                </div>

                <img id='bg' src="/bg.jpg" alt="" />
            </div>


            <div className="ct">

                <div className="services">
                    <h1>{lang == "english" ? "All in one Place for farmers" : "किसानों के लिए सब कुछ एक ही स्थान पर"}</h1>

                    <div className="service-container">
                        <div className="srv">
                            <div id='tools' className="redclr circle">{lang == "english" ? "Tools" : "औजार"}</div>
                            <div className="tools-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vero, error amet dicta, obcaecati eos quod eius, aspernatur eum harum reiciendis. Obcaecati aperiam quibusdam excepturi non ipsum deserunt tempora repellendus.</div>
                        </div>


                        <div className="srv">
                            <div id='seeds' className="redclr circle">{lang == "english" ? "Seeds" : "औजार"}</div>
                            <div className="tools-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vero, error amet dicta, obcaecati eos quod eius, aspernatur eum harum reiciendis. Obcaecati aperiam quibusdam excepturi non ipsum deserunt tempora repellendus.</div>
                        </div>
                        <div className="srv">
                            <div id='community' className="redclr circle">{lang == "english" ? "Community" : "औजार"}</div>
                            <div className="tools-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vero, error amet dicta, obcaecati eos quod eius, aspernatur eum harum reiciendis. Obcaecati aperiam quibusdam excepturi non ipsum deserunt tempora repellendus.</div>
                        </div>

                        <div className="srv">
                            <div id='tech' className="redclr circle">{lang == "english" ? "Tech" : "औजार"}</div>
                            <div className="tools-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vero, error amet dicta, obcaecati eos quod eius, aspernatur eum harum reiciendis. Obcaecati aperiam quibusdam excepturi non ipsum deserunt tempora repellendus.</div>
                        </div>                    </div>

                </div>

                <div className="team">
                    <h1>{lang == "english" ? "Meet our Team" : "हमारी टीम से मिलें"}</h1>
                    <div className="team-container">
                        <div className="member">
                            <img src="/tusharcopy.png" alt="" />
                            <h2>{lang == "english" ? "Tushar Choudhary" : "तुषार चौधरी"}</h2>
                            <p>Founder and CEO</p>
                        </div>

                        <div className="member">
                            <img src="/tusharcopy.png" alt="" />
                            <h2>{lang == "english" ? "Swayam Sachdeva" : "स्वयं सचदेवा"
                            }</h2>
                            <p>Senior Developer</p>

                        </div>

                        <div className="member">
                            <img src="/tusharcopy.png" alt="" />
                            <h2>{lang == "english" ? "Tushar Chauhan" : "तुषार चौहान"}</h2>
                            <p>Manager</p>
                        </div>

                        <div className="member">
                            <img src="/tusharcopy.png" alt="" />
                            <h2>{lang == "english" ? "Utkarsh Chauhan" : "उत्कर्ष चौहान"}</h2>
                            <p>Developer and Designer</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Home
