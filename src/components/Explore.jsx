import React, { useRef, useState } from 'react'
import "../index.css"
import Navbar from './Navbar'
import { useGSAP } from '@gsap/react';
import Footer from './Footer';

const Explore = () => {
    const [price, setprice] = useState(50);
    let inpref = useRef();
    const [lang, setlang] = useState("english");

    // useGSAP(()=>{
    //     gsap.to("div",{
    //         x:10,
    //         duration:2
    //     })
    // })


    return (
        <div className='explore-container'>
            <Navbar lang={lang} s={setlang} />
            {/* <div className="cover">
                <h1>EXPLORE</h1>
                <div className="btn">
                    <button>Home</button>
                    <button>Community</button>
                </div>
            </div> */}

            <div className="products">
                <div className="options">
                    <div className="categories">
                        <h1>{lang == "english" ? "Categories" : "श्रेणी"}</h1>
                        <ul><li><a href="">Equipments</a></li>
                            <li><a href="">Resources</a></li>
                            <li><a href="">Transports</a></li>
                            <li><a href="">Seeds</a></li>
                        </ul>
                    </div>

                    <div className="filter">
                        <h1>Price</h1>
                        <div className="lower-filter">
                            <input ref={inpref} onChange={() => { setprice(inpref.current.value) }} type="range" className='inpprice' id="" />
                            <p>&#8377;{price}</p>
                        </div>
                    </div>

                    <div className="tags">
                        <h1>Popular Tags</h1>
                        <div className="tg">
                            <button>Free</button>
                            <button>New piece</button>
                            <button>In - Hand</button>
                            <button>For months</button>
                            <button>New Technology</button>
                            <button>Rice</button>
                            <button>Wheat</button>
                            <button>Sugarcane</button>
                            <button>Potatoes</button>
                            <button>Tomatoes</button>
                            <button>Cattle</button>
                            <button>Tractor</button>
                            <button>Tubewell</button>
                            <button>Bajra</button>
                            <button>Spray</button>

                            <button>Fruits</button>
                            <button>Vegetables</button>
                            <button>Manure</button>
                            <button>fencing</button>
                            <button>plants</button>
                            <button>seeds</button>
                            <button>animals</button>
                            <button>Vechiles</button>
                            <button>devices</button>
                        </div>


                    </div>

                    <div className="imp-links">
                        <h1>For You</h1>
                        <ul>
                            <li><a href="">List Your Product</a></li>
                            <li><a href="">Ckeck your crop </a></li>
                            <li><a href="">Find a retailer</a></li>
                            <li><a href="">Get AI Help</a></li>

                        </ul>

                    </div>
                </div>
                <div className="list-of-products">
                    <div className="head">Showing result for - Fruits</div>

                    <div className="product-container">

                        <h1>Equipments</h1>

                        <div className="equipment-container">
                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (1).jpg" alt="" />
                                </div>
                                <h4>Name </h4>

                                <p>&#8377;500/day</p>
                                <div className='yellow'>(Rent)</div>

                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400/day</p>
                                <div className='yellow'>(Rent)</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (1).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <div className="free">Free</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400/day</p>
                                <div className='yellow'>(Rent)</div>
                            </div>


                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (3).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <div className="free">Free</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (3).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;600/hour</p>
                                <div className='yellow'>(Rent)</div>
                            </div>


                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <div className="free">Free</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <div className="free">Free</div>
                            </div>
                        </div>

                        <h1>Equipments</h1>

                        <div className="equipment-container">
                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (1).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;500</p>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400/day</p>
                                <div className='yellow'>(Rent)</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (1).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <div className="free">Free</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400</p>
                            </div>


                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (3).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <div className="free">Free</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (3).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400/day</p>
                                <div className='yellow'>(Rent)</div>
                            </div>


                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400</p>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400/day</p>
                                <div className='yellow'>(Rent)</div>
                            </div>
                        </div>


                        <h1>Equipments</h1>

                        <div className="equipment-container">
                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (1).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400/day</p>
                                <div className='yellow'>(Rent)</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400</p>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (1).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400/day</p>
                                <div className='yellow'>(Rent)</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400</p>
                            </div>


                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (3).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400/day</p>
                                <div className='yellow'>(Rent)</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (3).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;600</p>
                            </div>


                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400/day</p>
                                <div className='yellow'>(Rent)</div>
                            </div>

                            <div className="card">
                                <div className="img-cont">
                                    <img src="/p (2).jpg" alt="" />
                                </div>
                                <h4>Name </h4>
                                <p>&#8377;400</p>
                            </div>
                        </div>



                    </div>
                </div>

            </div>



            <Footer/>


        </div>
    )
}

export default Explore
