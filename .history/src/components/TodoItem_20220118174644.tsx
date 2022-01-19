import React, { EventHandler } from 'react'

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    const {title, dueDate, tagList, completed} = todoListItem;
    return (
        <div className="card">
            <input type="checkbox" style={{float: "left"}}/>
            <h1>{title}</h1>
            {tagList.map((tagObject: {name1: string, index1: number}, index: number) => {
                <Tag>name={tagObject.name1} key={tagObject.index1} theIndex={tagObject.index1} remove={removeElement} include={"x"}</Tag>
            })}
        </div>
    )
}