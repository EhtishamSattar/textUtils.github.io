import React from 'react';

export default function About(props) {

    const styleAcc={
      color:props.mode==='light'?'black':'white',
      backgroundColor:props.mode==='light'?'white':'black'
    }

    // styleAcc will be in real use ... any change to styleAccNew will update the styleAcc 
    
    
    //todo SUMMARY OF THE ABOVE CODE 

    //! two hooks used --> one for changing the theme --> one for changing the btn text
    //! when the user press the enable dark mood button the color of the accourdian will 
    //! change
    
    
    
  return (
    <div className="accordion mt-3" id="accordionExample" >
    <h2 className="mb-5 p-3" style={styleAcc} >TextUtils - About Us</h2>
  <div className="accordion-item open" style={styleAcc}>
    <h2 className="accordion-header"  style={styleAcc}id="headingOne">
      <button className="accordion-button" style={styleAcc} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Converting to Uppercase . 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={styleAcc} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={styleAcc}>
        <strong>This is the all about uppercasing text.</strong> Alternatively known as caps and capital, and sometimes abbreviated as UC, uppercase is a typeface of larger characters. For example, typing a, b, and c shows lowercase, and typing A, B, and C shows uppercase. To type in uppercase, you can use either the Caps Lock key or the Shift key on the keyboard.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={styleAcc}>
    <h2 className="accordion-header" style={styleAcc} id="headingTwo">
      <button className="accordion-button collapsed" style={styleAcc} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Coverting to Lowercase.
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={styleAcc} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is about lowercasing text.</strong> In writing, most letters are lowercase. Lowercase letters are all letters that do not begin a sentence or refer to a proper noun.English alphabet lowercase letters: a b c d e f g h i j k l m n o p q r s t u v w x y z.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={styleAcc}>
    <h2 className="accordion-header" style={styleAcc} id="headingThree">
      <button className="accordion-button collapsed" style={styleAcc} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Copying the text to keyboard.
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={styleAcc} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={styleAcc}>
        <strong>This is about copying the text to the keyboard when clicking on the "COPY TO KEYBOARD" button.</strong> By clivking on t he button the entered text int he text area will be copied to your key board.
      </div>
    </div>
  </div>
  <div>
  

  </div>
</div>

  );
}
