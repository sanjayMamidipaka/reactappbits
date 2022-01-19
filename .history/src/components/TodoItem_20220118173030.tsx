import React, { EventHandler } from 'react'

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    {title, dueDate, tagList, completed: false,
      idx: new Date().getTime().toString()
    }}
    return (
        <div className="card">
            <h1>{}</h1>
        </div>
    )
}