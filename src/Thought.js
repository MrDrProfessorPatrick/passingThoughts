import React from 'react';

export function Thought({thoughts, removeThought}) {
  console.log(thoughts);

  return (
    <ul className="thoughts">

    {thoughts.map((thought) => {

      <li key = {thought.id} className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={() => removeThought(thought.id)}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
    })}

    </ul>
  );
}
