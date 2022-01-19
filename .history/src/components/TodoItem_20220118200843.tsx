import React, { EventHandler } from 'react'
import Tag from './Tag';
import './TodoItem.css';

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    const {title, dueDate, tagList, completed} = todoListItem;
    
    return (
        // <div className="card">
        //     <input type="checkbox" className="checkBox"/>
        //     <h1 className="name">{title}</h1>
        //     <h6 className="date">by: {dueDate}</h6>
        <div className="card">
            <div className="grid-container">
                <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
            </div>
            <input className="grid-item" type="checkbox"/>
        </div>
            <div></div>
            {tagList.map((tagObject: {name1: string, index1: number}, index: number) => {
                return <Tag name={tagObject.name1} key={tagObject.index1} theIndex={tagObject.index1} remove={()=>{}} include={""}></Tag>
            })}
        </div>
    )
}