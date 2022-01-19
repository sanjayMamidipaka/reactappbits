import React, { EventHandler } from 'react'
import Tag from './Tag';
import './TodoItem.css';

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    const {title, dueDate, tagList, completed} = todoListItem;
    
    return (
        <div className="card">
            <input type="checkbox" className="checkBox"/>
            <h1 className="name">{title}</h1>
            <h6 className="date">by: {dueDate}</h6>
            <div></div>
            {tagList.map((tagObject: {name1: string, index1: number}, index: number) => {
                return <Tag name={tagObject.name1} key={tagObject.index1} theIndex={tagObject.index1} remove={()=>{}} include={""}></Tag>
            })}
        </div>
    )
}