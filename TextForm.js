import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const Upper = () => {
    // console.log("You clicked on btn")
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to Uppercase","success")
  };

  const Lower = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to Lowercase","success")

  };

  const handleCopy=()=>{
      let text=document.getElementById("exampleFormControlTextarea1")
      navigator.clipboard.writeText(text.value)
      props.showAlert(" Copied to Clipboard","success")

  };

  

  const handleChange = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <div className="container mb-3" style={{color: props.changeMode==="light"?"black":'white'}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleChange}
          placeholder={props.placeholder}
          style={{backgroundColor: props.changeMode==="light"?"white":'grey',color:props.changeMode==="light"?"black":'white',cursor:"pointer"}}
          rows="8"
        ></textarea>
        <button className="btn btn-primary btn-sm my-3" onClick={Upper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-danger btn-sm my-3 mx-3" onClick={Lower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-info btn-sm my-3 mx-3" onClick={handleCopy}>
          Copy Text
        </button>

        

        
      </div>
      <div className="container"style={{color: props.changeMode==="light"?"black":'white'}}>
          <h2>Your Text Summary </h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length }  Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter somthing in the text box to preview here."}</p>
      </div>
    </>
  );
}






