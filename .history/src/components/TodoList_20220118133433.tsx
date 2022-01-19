import React, { EventHandler } from 'react'
import './TodoList.css'
import { useState } from 'react'
import Tag from './Tag'
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
  const [tagValue, setTagValue] = useState('');
  const [index, setIndex] = useState(0);

  const [tagArray, setTagArray] = useState<{name: string, index: number}[]>([]);

  const whenSubmitted = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      // setDataNew((dataNew) => {
      //   return [...dataNew, { id: index, name, email }];
      // });
      // setNewIndex(index + 1);
      setName("");
      setEmail("");
    };

    const addNewTag = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (tagValue !== "") {
        setTagArray((tagArray: {name: string, index: number}[]) => {
          return [...tagArray, {name: tagValue, index: index}];
        });
        setNewIndex(index + 1);
      }

    }
    
    // const removeElement = (index: number) => {
    //   setTagArray((tagValue)=>{
    //     let newDataNew = tagArray.filter((dataPoint) => dataPoint.id !== index);
    //     return newDataNew;
    //   })
    // }

  const example: TodoItem = {
    title: 'Example todo',
    dueDate: new Date(),
    tagList: ['example', 'todo'],
    completed: false,
  }
  return (
  <div className="card">
    <label htmlFor="nameLabel">Title </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div style={{padding: '5px'}}></div>

        <label htmlFor="tagLabel">Tags </label>
        <input
          type="text"
          value={tagValue}
          onChange={(e) => setTagValue(e.target.value)}
        />
        <button type="submit" onClick={addNewTag}>
          Create new tag
        </button>

        <div>
          {tagArray.map((tagObject: {name: string, index: number}) => {
            return <Tag name={tagValue} key={index} theIndex={index} remove={()=>{}}></Tag>
          })}
        </div>

        <label htmlFor="nameLabel">Due Date </label>
        <input
          type="date"
          value={'2021-03-09'}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div style={{padding: '15px'}} className = 'submitButton'>
          <button style ={{width: '100%'}} type='submit'>Create</button>
        </div>

</div>
  )
}
