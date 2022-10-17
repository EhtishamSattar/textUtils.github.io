import React,{ useState} from 'react';

export default function Textform(props) {
  const[text,setText]=useState('');


    const upperCaseClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to upperCase','success')
        
      }
      
      const lowerCaseClick=()=>{
        let newText2=text.toLowerCase();
        setText(newText2);
        props.showAlert('Text converted to lowerCase','success')
      }
      
      const copyClick=()=>{
        //! here to copy the text to clipboad , i have to make a temporary element which i must 
        //! have to append into the Dom
        //todo this is solution 1 which i found
        // var area=document.createElement('textarea');
        // area.innerText = text;
        // document.body.appendChild(area);
        // area.select()
        // document.execCommand('copy');
        // area.remove();
        
        //todo this is solution 2 by tutotial 
        var text1=document.getElementById('textBox');
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showAlert('Text copied to keyboard','success')
      }
      
      const clearClick=()=>{
        let clear="";
        setText(clear);
        props.showAlert('Text removed from the textbox','success')
      }
      
      const spaceClick=()=>{
        //! this split function gives a array .. jo params pass kiye unsy words ko split kr ky
        //! aek array dy dy gha ..... 
        // idr regex use kia hua hai 
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces between words has been removed in the textbox','success')
    
    }

    const change=(e)=>{
        setText(e.target.value);
    }

    
  return (
    <>
      <div>
        <div className={`my-3 text-${props.mode==='dark'?'light':'dark'}`}>
          <h2>{props.heading}</h2>
          <textarea
            className={`form-control text-${props.mode==='dark'?'light':'dark'} bg-${props.mode==='dark'?'secondary':'light'}`}
            value={text}
            onChange={change}
            id="textBox"
            rows="6"
          ></textarea>
        </div>
        <button
          type="button"
          className={`btn btn-${props.mode==='dark'?'dark':'primary'} ${text.length===0?'disabled':'active'} my-2`}
          onClick={upperCaseClick}
        
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2 ${text.length===0?'disabled':'active'} my-2`}
          onClick={lowerCaseClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='dark'?'dark':'primary'} ${text.length===0?'disabled':'active'} my-2`}
          onClick={copyClick}
        >
          Copy to keyboard
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='dark'?'dark':'primary'} ${text.length===0?'disabled':'active'} mx-2 my-2`}
          onClick={spaceClick}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='dark'?'dark':'primary'} ${text.length===0?'disabled':'active'} my-2`}
          onClick={clearClick}
        >
          Clear Text
        </button>
      </div>
          
      <div className={`my-2 text-${props.mode==='dark'?'light':'dark'} my-2`}>
        <p>
          words {text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} characters {text.length}
        </p>
        <h3>Preview</h3>
        <p>{text.length===0?"Write something to get its preview":text}</p>
      </div>
    </>
  );
}
