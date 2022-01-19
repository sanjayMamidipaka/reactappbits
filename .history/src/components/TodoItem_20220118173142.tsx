import React, { EventHandler } from 'react'

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    const {title, dueDate, tagList, completed, idx} = todoListItem;
    return (
        <div className="card">
            <h1>{}</h1>
        </div>
    )
}