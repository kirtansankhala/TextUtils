import React, { useState } from "react"

export default function TextForm(props) {

  // Handle the click on uppercase button
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase" , "success")
  };
  // Handle the click on lowercase button
  const handleLoClick = () => {
    props.showAlert("Converted to Lowercase" , "success")
    let newText = text.toLowerCase();
    setText(newText);
  };
  // Handle the text change event
  const handleOnChange = (event) => {
    setText(event.target.value);
  
  };
  // Handle the click on copy text button
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied" , "success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed All extra spaces" , "success")
  };

  // Characters Define
  const [text, setText] = useState("");
  var characterWithoutSpace = text.replace(/ /g, "");

  return (
    <>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className= {`form-control ${props.mode === "light" ? "lightTextarea" : "darkTextarea"}`}
            value={text}
            placeholder="Enter Text Here"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className={`btn ${props.mode === "light" ? "lightbtn" : "darkbtn"} `} onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className={`btn ${props.mode === "light" ? "lightbtn" : "darkbtn"} mx-2`} onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className={`btn ${props.mode === "light" ? "lightbtn" : "darkbtn"} mx-2`} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className={`btn ${props.mode === "light" ? "lightbtn" : "darkbtn"} mx-2`} onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {characterWithoutSpace.length}{" "}
          Characters
        </p>
       
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to show, Enter text above"}</p>
      </div>
    </>
  );
}

