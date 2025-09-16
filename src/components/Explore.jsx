import React, { useEffect, useRef, useState } from 'react'
import "../index.css"
import Navbar from './Navbar'
import Footer from './Footer'

const Explore = () => {
  const [price, setprice] = useState(50);
  const inpref = useRef();
  const optref = useRef();

  const [lang, setlang] = useState("english");

  const [transports, settransports] = useState([]);
  const [seeds, setseeds] = useState([]);
  const [fruits, setfruits] = useState([]);

  const arr = ["vehicles", "seeds", "fruits","tractor"];

  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      fetch(`http://localhost:3000/getdatabytag/${element}`)
        .then(r => r.json())
        .then(result => {
          if (element === "vehicles") settransports(result);
          else if (element === "seeds") setseeds(result);
          else if (element === "fruits") setfruits(result);
        })
        .catch(err => console.error("Fetch error:", err));
    }
  }, []);

  return (
    <div className='explore-container'>
      <Navbar lang={lang} s={setlang} optref={optref} />

      <div className="products">
        {/* Sidebar */}
        <div ref={optref} className="options">
          <div
            onClick={() =>
              optref.current.setAttribute("style", "transform: translate(-105%);")
            }
            className="close"
          >
            <img id='close' src="/close.PNG" alt="" />
          </div>

          <div className="categories">
            <div className="b-head">
              <h1>{lang === "english" ? "Categories" : "श्रेणी"}</h1>
              <img
                onClick={() =>
                  document.querySelector("#categories-list").classList.toggle("d-n")
                }
                src="/arrow.PNG"
                alt=""
              />
            </div>
            <ul id='categories-list'>
              <li><a href="">Equipments</a></li>
              <li><a href="">Resources</a></li>
              <li><a href="">Transports</a></li>
              <li><a href="">Seeds</a></li>
            </ul>
          </div>

          <div className="tags">
            <div className="b-head">
              <h1>{lang === "english" ? "Popular tags" : "श्रेणी"}</h1>
              <img
                onClick={() =>
                  document.querySelector(".t").classList.toggle("d-n")
                }
                src="/arrow.PNG"
                alt=""
              />
            </div>
            <div className="t">
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
                <button>Fencing</button>
                <button>Plants</button>
                <button>Seeds</button>
                <button>Animals</button>
                <button>Vehicles</button>
                <button>Devices</button>
              </div>
            </div>
          </div>

          <div className="imp-links">
            <div className="b-head">
              <h1>{lang === "english" ? "For You" : "श्रेणी"}</h1>
              <img
                onClick={() =>
                  document.querySelector("#fy").classList.toggle("d-n")
                }
                src="/arrow.PNG"
                alt=""
              />
            </div>
            <ul id='fy'>
              <li><a href="">List Your Product</a></li>
              <li><a href="">Check your crop</a></li>
              <li><a href="">Find a retailer</a></li>
              <li><a href="">Get AI Help</a></li>
            </ul>
          </div>

          <div className="filter">
            <h1>{lang === "english" ? "Price" : "श्रेणी"}</h1>
            <div className="lower-filter">
              <input
                ref={inpref}
                onChange={() => setprice(inpref.current.value)}
                type="range"
                className='inpprice'
              />
              <p>&#8377;{price}</p>
            </div>
          </div>
        </div>

        {/* Main Product List */}
        <div className="list-of-products">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder='Search here' />
          </form>

          <div className="head">Showing result for - </div>

          <div className="product-container">
            <h1>Search Result</h1>
            <div className="equipment-container search-result">
              <div className="card">
                <div className="img-cont">
                  <img src="/p (1).jpg" alt="" />
                </div>
                <h4>Name</h4>
                <p>&#8377;500/day</p>
              </div>
            </div>

            {/* Transports */}
            <h1>Transport</h1>
            <div className="equipment-container">
              {transports.map((i, index) => (
                <div className="card" key={index}>
                  <div className="img-cont">
                    <img src={i.id} alt={i.name} />
                  </div>
                  <h4>{i.name}</h4>
                  <p>₹{i.price}</p>
                </div>
              ))}
            </div>

            {/* Seeds */}
            <h1>Seeds</h1>
            <div className="equipment-container">
              {seeds.map((i, index) => (
                <div className="card" key={index}>
                  <div className="img-cont">
                    <img src={i.id} alt={i.name} />
                  </div>
                  <h4>{i.name}</h4>
                  <p>₹{i.price}</p>
                </div>
              ))}
            </div>

            {/* Fruits */}
            <h1>Fruits</h1>
            <div className="equipment-container">
              {fruits.map((i, index) => (
                <div className="card" key={index}>
                  <div className="img-cont">
                    <img src={i.id} alt={i.name} />
                  </div>
                  <h4>{i.name}</h4>
                  <p>₹{i.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Explore
