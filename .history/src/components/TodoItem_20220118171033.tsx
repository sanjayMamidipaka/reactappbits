import React, { EventHandler } from 'react'

export default function TodoItem(props: any) {
    return (

        {console.log(todoList)}
        <div>{props.todoListItem.title}</div>
    )
}