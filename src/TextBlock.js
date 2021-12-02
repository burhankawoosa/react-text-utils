import React, { useState } from 'react';


export default function TextBlock() {
    const [text, setText] = useState('')

    const [myStyle, setmyStyle] = useState({

        color: 'black',
        backgroundColor: 'white'
    })
    const uppercasefuntion = () =>{
        let newText= text.toUpperCase();
        setText(newText);
        

    }
    const lowercasefuntion = () =>{
        let newText= text.toLowerCase();
        setText(newText);
        

    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const copytext = ()  =>{
        var text= document.getElementById("mytextarea");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    
    return (
        <>
    <div className="container my-5">  
    <h1>Enter your Text Below to get Started </h1>
<div className="mb-3" style={myStyle}>
  <textarea className="form-control" id="mytextarea" rows="6" value={text} onChange={handleOnChange} style={myStyle} ></textarea>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={uppercasefuntion}>Convert to Upper Case</button>
  <button type="button" className="btn btn-primary my-3 mx-2"  onClick={lowercasefuntion}>Convert to Lower Case</button>
  <button type="button" className="btn btn-primary my-3" onClick={copytext}>Copy Text</button>
</div>

</div>
<div className="container">
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div> 

</>
    )
}
