import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm({handleTextChange, handleSubmit}) {

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

