import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is in UpperCase","success");
    }
    const handleLowClick=()=>{
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Text is in LowerCase","success");
    }
    const handlePasClick=()=>{
        const arr = text.split(' ');
        let text2="";
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]!==""){
                let uppers = arr[i][0].toUpperCase();
                let lowers = arr[i].slice(1).toLowerCase();
                let converstr = uppers+lowers;
                text2+=converstr;
                text2+=" ";
            }
            setText(text2);
            props.showAlert("Here's your Pascal Case!","success");
        }
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const clearText=()=>{
        setText(' ');
        props.showAlert("Text cleared","success");
    }
    const copyText=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied to clipboard","success");
    }
    const[text,setText] = useState(' ');
    return (
    <>
        <div className='container'>
            <div className="form-group">
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>To Uppercase</button>
                <button className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>To Lowercase</button>
                <button className='btn btn-primary mx-2 my-1' onClick={handlePasClick}>To Pascal Case</button>
                <button className='btn btn-primary mx-2 my-1' onClick={clearText}>Clear</button>
                <button className='btn btn-primary mx-2 my-1' onClick={copyText}>Copy</button>
            </div>
        </div>
    
        <div className='container mb-3'>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(' ').length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            
        </div>
    </>
  )
}
