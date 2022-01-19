import React from 'react'
import './TodoList.css'
import { useState } from 'react'
/**
 * Thank you for applying to Bits of Good. You are free to add/delete/modify any 
 * parts of this project. That includes changing the types.ts, creating css files, 
 * modifying import statements, using contexts, etc. We do recommend to keep it simple. 
 * You will not be judged based on complexity. We also recommend using 
 * multiple components instead of coding everything on this file :)
 * 
 * Have fun! Please reach out to hello@bitsofgood.org or wkim330@gatech.edu if you
 * have any questions!
 * 
 * Bits of Good Engineering Team
 * 
 */
// TODO: Start coding from here

// Here's a baseline todo item type. 
// Feel free to extend or create your own interface!
export type TodoItem = {
  title: string,
  dueDate: Date,
  tagList: string[],
  completed: boolean,
}

export default function TodoList() {
  const [name, setName] = useState('hi');
  const [email, setEmail] = useState('sup');

  const example: TodoItem = {
    title: 'Example todo',
    dueDate: new Date(),
    tagList: ['example', 'todo'],
    completed: false,
  }
  return (
  <div className="card">
    <label htmlFor="nameLabel">Enter your name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="nameLabel">Enter your email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={whenSubmitted}>
          submit
        </button>
</div>
  )
}
