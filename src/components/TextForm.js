import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text.length>0?props.showAlert('Converted to Uppercase','success'):props.showAlert('Text field is empty','warning');
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text.length>0?props.showAlert('Converted to Lowercase','success'):props.showAlert('Text field is empty','warning');
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleClear = () => {
    setText("");
    text.length >0?props.showAlert('Cleared text','success'):props.showAlert('Text field is empty','warning');
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 style={{ Color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mytext"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text summary</h1>
        <p>
          Your text has {text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <p>{text.split(" ").length * 0.008} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length >0? text:"Enter the text to preview"}</p>
      </div>
    </>
  );
}
