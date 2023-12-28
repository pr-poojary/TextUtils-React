import React, { useState } from 'react'


export default function TextForm(props) {
   const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase", "success");
   }
   const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase", "success");
   }
   const handleClearClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Text is Cleared", "success");
   }
   const handleOnChange = (event) => {
      setText(event.target.value);
   }
   const handleCopy = () => {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is copied to Clipboard", "success");
   }
   const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces had been removed", "success");
   }
   const [text, setText] = useState('');

   return (
      <>
         <div className="container w-75 my-3">
            <div className='container'>
               <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
               <div className="mb-3">
                  <textarea className="form-control" id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} value={text} placeholder='Enter your Text here'></textarea>
               </div>
               <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
               <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
               <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} mx-2`} onClick={handleCopy}>Copy Text</button>
               <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
               <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} mx-2`} onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className={`container w-75 my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
               <h1>Your Text Summary</h1>
               <p>Words {text.split(" ").length} and {text.length} Characters</p>
               <p>{0.008 * text.split(" ").length} Mintues read</p>
               <h3>Preview</h3>
               <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview'}</p>
            </div>
         </div>
      </>
   );
}
