import React, { EventHandler } from 'react'

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    return (
        <div className="card">{todoListItem.title}</div>
    )
}