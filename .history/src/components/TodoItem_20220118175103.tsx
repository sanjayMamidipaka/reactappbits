import React, { EventHandler } from 'react'
import Tag from './Tag';

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    const {title, dueDate, tagList, completed} = todoListItem;
    
    return (
        <div className="card">
            <input type="checkbox" style={{float: "left"}}/>
            <h1>{title}</h1>
            {tagList.map((tagObject: {name1: string, index1: number}, index: number) => {
                <div>

                </div>
                return
            })}
        </div>
    )
}