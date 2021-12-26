// import { useState } from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark"?"white":"black",
    backgroundColor: props.mode === "dark"?"black":"white",
    border: props.mode === "dark"?"1pt solid white":"1px solid black"
  }
  
 
  return (
    <div className="container my-3" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion dark" id="accordionExample">
        <div className="accordion-item my-3"  style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"  style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About App
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            TextUtils is an Utility used by many working professional to 
manipulate there text. It provides you many option to edit your text like, Convert to Upper case,
To Lower Case, Remove Extra Spaces , Copy Option for huge text. And the best the app is that TextUtils is free to use.
            </div>
          </div>
        </div>
        <div className="accordion-item my-3" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"  style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              About Developers
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             TextUtils was developed  in India, Indore. It was build and is maintained by AOT Corporation. It was first made for personal use by Company but later it was released on chrome for public use. The app was build under the supervision of AOT Corporation, CEO Mr kirtan Sankhala and Director Haris Khan(The Founder of Youtude Channel "Code With Harry")
            </div>
          </div>
        </div>
        <div className="accordion-item my-3" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              App License
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
           TextUtils app is Licensed by Chrome, Bing, Firefox and many other browers. Instagram - Arrow of Time, FaceBook - Arrow of Time, Linkdin - AOT Corporation, Twitter -
           AOT Corporation. <a href="https://www.google.com/search?q=microsoft+share+price&rlz=1C1VDKB_enIN969IN969&oq=&aqs=chrome.1.35i39i362l8.10040247j0j15&sourceid=chrome&ie=UTF-8">Shareprice of AOT Corporation</a> 
           &nbsp; All Right Reserved to @ AOT 
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}
