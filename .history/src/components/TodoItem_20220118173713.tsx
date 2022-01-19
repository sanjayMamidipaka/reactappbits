import React, { EventHandler } from 'react'

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    const {title, dueDate, tagList, completed} = todoListItem;
    return (
        <div className="card">
            <input type="checkbox" style=/>
            <h1>{title}</h1>
        </div>
    )
}