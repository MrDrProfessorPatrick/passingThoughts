import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  // const addThought = (newThought) =>{
  //   setThoughts((prev)=>{
  //     return [newThought, ...prev]
  //   })
  // }

  const handleTextChange = (event) => {
    setText(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
     const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    }

    if (text.length > 0) { 
      setText(thought);
}
    //  setText('');
  }

  return (
    <form  className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange = {handleTextChange}
        
      />
      <input type="submit" value="Add" onClick = {handleSubmit}/>
    </form>
  );
}

