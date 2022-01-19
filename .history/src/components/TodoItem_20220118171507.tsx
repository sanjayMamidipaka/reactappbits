import React, { EventHandler } from 'react'

export default function TodoItem({todoListItem, index}: {todoListItem: Object, index: string}) {
    return (
        <div>{todoListItem}</div>
    )
}