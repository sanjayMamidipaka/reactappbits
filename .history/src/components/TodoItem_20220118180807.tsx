import React, { EventHandler } from 'react'
import Tag from './Tag';

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    const {title, dueDate, tagList, completed} = todoListItem;
    
    return (
        <div className="card">
            <input type="checkbox" style={{float: "left"}} />
            <div>
                <h1 className="child">{title}</h1>
                <h4 className="child">by: {dueDate}</h4>
            </div>
            {tagList.map((tagObject: {name1: string, index1: number}, index: number) => {
                return <Tag name={tagObject.name1} key={tagObject.index1} theIndex={tagObject.index1} remove={()=>{}} include={""}></Tag>
            })}
        </div>
    )
}