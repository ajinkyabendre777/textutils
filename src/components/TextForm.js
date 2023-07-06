import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success','Converted to upper case!');
    }

    const handleLoClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert('success','Converted to lower case!');
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert('warning','Text cleared');
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  
  const[text,setText] = useState("")
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#17202b'}}>

        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#17202b':'white',color:props.mode==='dark'?'white':'#17202b'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        </div>

        <div className="container my-3" >
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the text box above to preview it here '}</p>
        </div>


    </div>
  )
}
