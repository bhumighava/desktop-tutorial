import React, {useState}  from 'react' 


export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success");
  }

  const handleClearClick = ()=>{
    // console.log("Clear text was clicked: " + text);
    let newText = ' ';
    setText(newText)
    props.showAlert("Text cleard", "success");

  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
   setText(event.target.value);
  }

  // Credits A
  const handleCopy = () =>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");

  }

  //Credits coding wala
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space Removed", "success");

  }

  const [text, setText] = useState(" ");
  // Text= "New text "; // wrong way to change the state
  // setText("New text"); // Correct way to change the state

  return (
    <>
<div className = "Container" style={{color: props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
      <h1>Your text summary</h1>
      <p>{text.split (" ").length} words and {text.length} charactes</p>
      <p>{0.008 * text.split (" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </> 
    
  )
}
