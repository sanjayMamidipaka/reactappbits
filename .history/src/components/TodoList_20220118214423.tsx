import React, { EventHandler } from 'react'
import './TodoList.css'
import { useState } from 'react'
import Tag from './Tag'
import TodoItem from './TodoItem'
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

export default function TodoList() {
  const [title, setTitle] = useState('');
  const [tagValue, setTagValue] = useState('');
  const [index, setIndex] = useState(0);
  const [date, setDate] = useState('');
  const completedItems: any[] = [];
  const [todoListCompletedItems, setTodoListCompletedItems] = useState(completedItems);
  const [todoToggle, setTodoToggle] = useState(false);
  const [dateToggle, setDateToggle] = useState(false);
  const [checked, setChecked] = useState(false);

  const [tagArray, setTagArray] = useState<{name1: string, index1: number}[]>([]);

    const addNewTag = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (tagValue !== "") {
        setTagArray((tagArray: {name1: string, index1: number}[]) => {
          return [...tagArray, {name1: tagValue, index1: index}];
        });
      }
      setIndex(index + 1);
      setTagValue('');

    }
    
    const removeElement = (index: number) => {
      setTagArray((tagArray)=>{
        let newTagArray = tagArray.filter((tagObject) => tagObject.index1 !== index);
        
        return newTagArray;
      })
      console.log(tagArray);
      
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
      const itemToAdd: any = {
      title: title,
      dueDate: date,
      tagList: tagArray,
      completed: false,
      idx: new Date().getTime().toString(),
      checked: checked
    }
    setTitle('');
    setTodoListCompletedItems([...todoListCompletedItems, itemToAdd]);
    setTagArray([]);
    setDate('');
    }

    const sortByTodo = () => {
      setTodoToggle(!todoToggle);
      
      
      if (todoToggle === true) {
        todoListCompletedItems.sort((a,b) => {
          console.log(a + " " + b.checked);
          
          a = a ? 1 : 0;
          b = b ? 1 : 0;
          return a - b;
        })
      }
      
    }
  return (
    <div>
  <div className="card">
    <label htmlFor="nameLabel">Title </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          {tagArray.map((tagObject: {name1: string, index1: number}) => {
            return <Tag name={tagObject.name1} key={tagObject.index1} theIndex={tagObject.index1} remove={removeElement} include={"x"}></Tag>
          })}
        </div>

        <label htmlFor="dueDateLabel">Due Date </label>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />

        <div style={{padding: '15px'}} className = 'submitButton'>
          <button style ={{width: '100%'}} type='submit' onClick={handleSubmit}>Create</button>
        </div>

      </div>

      <div className="card">
          <div style={{padding: '10px'}}></div>
          <button onClick={sortByTodo}>todo</button>
          <button>date</button>
          <div style={{padding: '10px'}}></div>
      </div>

      <div>
          {todoListCompletedItems.map((todoListItem) => {
            return <TodoItem todoListItem={todoListItem} key={todoListItem.idx} index={todoListItem.idx} setChecked={setChecked}></TodoItem>
          })}
        </div>

        </div>
  )
}
