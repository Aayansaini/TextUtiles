import React, { useState } from "react";
// import proptypes from 'prop-types'
export default function Textform(Props) 
{
  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlerefresh = () => {
    let newText = " ";
    setText(newText);
  };

  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handleExtraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  };
  const handlecopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1")
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="parent" style={{color: Props.mode==='dark'?'white':'black'}}>
      <br></br>
      <h1>WRITE SUMMERY...</h1>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          {Props.text}
        </label>
        <textarea className={"form-control"}value={text}onChange={handleonchange} style={{backgroundColor: Props.mode==='dark'?'black':'white',color:Props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1"rows="9"></textarea>
        <button style={{marginTop:20,color: Props.mode==='dark'?'white':'black', borderColor:  Props.mode==='dark'?'white':'black',backgroundColor: Props.mode==='dark'?'black':'grey'}} className="btn btn-outline-dark mx-3" onClick={handleupclick}>
          ToUpperCase
        </button>
        <button style={{marginTop:20,color: Props.mode==='dark'?'white':'black', borderColor:  Props.mode==='dark'?'white':'black',backgroundColor: Props.mode==='dark'?'black':'grey'}} className="btn btn-outline-dark mx-3" onClick={handleloclick}>
          ToLowercase
        </button>
        <button style={{marginTop:20,color: Props.mode==='dark'?'white':'black', borderColor:  Props.mode==='dark'?'white':'black',backgroundColor: Props.mode==='dark'?'black':'grey'}} type="button" className="btn btn-dark mx-3" onClick={handlecopy}>
          CopyText
        </button>
        <button style={{marginTop:20,color: Props.mode==='dark'?'white':'black', borderColor:  Props.mode==='dark'?'white':'black',backgroundColor: Props.mode==='dark'?'black':'grey'}} type="button" className="btn btn-dark mx-3" onClick={handleExtraspace}>
          RemoveExtraSpace
        </button>
        <button style={{marginTop:20,color: Props.mode==='dark'?'white':'black', borderColor:  Props.mode==='dark'?'white':'black',backgroundColor: Props.mode==='dark'?'black':'grey'}} type="button" className="btn btn-dark mx-3" onClick={handlerefresh}>
          Refresh
        </button>
      </div>
      <div className="box my-3">
        <h1> Your Text Summery</h1>
        <p>1000 Words and {text.length} Characters </p>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview...</h2>
        <p>{text.length>0?text:"Enter Something In The TextBox Above To Preview It Here..."}<br></br></p>
      </div>
      </div>
    </>
  );
}
