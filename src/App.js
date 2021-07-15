import React, { useState } from 'react';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import {generateId, getNewExpirationTime} from './utilities'


export function App() {

  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

    const addThought = (newThought) =>{
    setThoughts((prev)=>{
      return [newThought, ...prev]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
     const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    }

    if (text.length > 0) { 
      addThought(thought);
}
      setText('');
  }
  
  return (
  
    <div className= "App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm handleSubmit = {handleSubmit} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} />
          ))}
        </ul>
      </main>
    </div>
    
  );
}

