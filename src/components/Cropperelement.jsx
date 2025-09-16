import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function Cropperelement() {
  const cropperRef = useRef(null);
  let si = useRef();
  let priceref = useRef()
  let nameref = useRef()
  let moderef = useRef()
  const [Mode, setMode] = useState("full");
  const [image, setImage] = useState("");
  const [croppedImage, setCroppedImage] = useState("");



  const handleUpload = async () => {
    const img = document.getElementById("avtar");
    const imgUrl = img.src;

    const response = await fetch(imgUrl);
    const blob = await response.blob();

    const file = new File([blob], "my-image.png", { type: blob.type });


    console.log("File object:", file);

    let tl = "";

    let a = document.getElementsByName("tag");

    a.forEach((i) => { i.checked ? tl = tl + ("#" + i.id) : console.log("Not ", i.id) })


    let price = Mode == "full" ? priceref.current.value : `${priceref.current.value}/${document.querySelector("#rentperiod").value}`

    const formData = new FormData();
    formData.append("avtar", file);
    formData.append("name", nameref.current.value);
    formData.append("price", price)
    formData.append("tag", tl)
    formData.append("mode",Mode)


    const res = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });

    location.href="/Explore"

  }



  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };


  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const canvas = cropper.getCroppedCanvas({
        width: 200,
        height: 200,
      });
      setCroppedImage(canvas.toDataURL("image/png"));
      si.current.setAttribute("style", "display:none")
    }
  };

  return (
    <div className="add-details-container" style={{ textAlign: "center", }}>

      <div className="add-box">
        <input id="inp" type="file" accept="image/*" onChange={onFileChange} />
        <label htmlFor="inp" className="costum-upload">Add image</label>
      </div>

      {image && (
        <div ref={si} style={{ width: "500px", height: "500px", margin: "20px auto" }}>
          <Cropper
            src={image}
            style={{ height: "100%", width: "100%" }}
            aspectRatio={1}
            dragMode="move"
            cropBoxResizable={false}
            cropBoxMovable={false}
            autoCropArea={1}
            viewMode={1}
            ref={cropperRef}
          />
        </div>
      )}

      {image && (
        <button onClick={handleCrop} style={{ marginTop: "10px" }}>
          Crop
        </button>
      )}

      <img
        id="avtar"
        src={croppedImage}
        alt="Cropped"
        style={{ width: "200px", height: "200px", border: "1px solid #ccc" }} />

      <div className="details">
        <div className="e">
          <h1>Name of Product</h1>
          <input type="text" ref={nameref} />
        </div>

        <div className="e">
          <h1>Mode of Sale</h1>
          <select onChange={(e) => { setMode(e.target.value) }}>
            <option value="full">Full time</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        {Mode == "full" ? (<div className="e">
          <h1>Price</h1>
          <input type="text" ref={priceref} />
        </div>) :

          (<div className="e">
            <h1>Rent</h1>
            <div className="flex">
              <input type="text" ref={priceref} />
              <select id="rentperiod">
                <option value="hour">Hour</option>
                <option value="day">Day</option>
                <option value="Week">Week</option>
              </select>
            </div>
          </div>)}


        <div className="e">

          <h1>Tags</h1>
          <div className="tgc">
            <div>
              <input type="checkbox" name="tag" id="equipment" />
              <label htmlFor="equipment">Equipment</label>
            </div>
            <div>
              <input type="checkbox" name="tag" id="seeds" />
              <label htmlFor="seeds">Seeds</label>
            </div>
            <div>
              <input type="checkbox" name="tag" id="pesticide" />
              <label htmlFor="pesticide">Pesticide</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="free" />
              <label for="free">Free</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="new-piece" />
              <label for="new-piece">New piece</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="in-hand" />
              <label for="in-hand">In - Hand</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="for-months" />
              <label for="for-months">For months</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="new-technology" />
              <label for="new-technology">New Technology</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="rice" />
              <label for="rice">Rice</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="wheat" />
              <label for="wheat">Wheat</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="sugarcane" />
              <label for="sugarcane">Sugarcane</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="potatoes" />
              <label for="potatoes">Potatoes</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="tomatoes" />
              <label for="tomatoes">Tomatoes</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="cattle" />
              <label for="cattle">Cattle</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="tubewell" />
              <label for="tubewell">Tubewell</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="bajra" />
              <label for="bajra">Bajra</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="spray" />
              <label for="spray">Spray</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="fruits" />
              <label for="fruits">Fruits</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="vegetables" />
              <label for="vegetables">Vegetables</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="manure" />
              <label for="manure">Manure</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="fencing" />
              <label for="fencing">Fencing</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="plants" />
              <label for="plants">Plants</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="seeds" />
              <label for="seeds">Seeds</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="animals" />
              <label for="animals">Animals</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="vehicles" />
              <label for="vehicles">Vehicles</label>
            </div>

            <div>
              <input type="checkbox" name="tag" id="devices" />
              <label for="devices">Devices</label>
            </div>


          </div>

        </div>

        <div className="e">
          <button onClick={() => { handleUpload() }}>Submit</button>
        </div>




      </div>


    </div>


  );
}
