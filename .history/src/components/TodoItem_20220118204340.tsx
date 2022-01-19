import React, { EventHandler } from 'react'
import Tag from './Tag';
import './TodoItem.css';

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    const {title, dueDate, tagList, completed} = todoListItem;

    const transformDate = (dueDate) {
        const date: string = e.target.value;
        const splitted = date.split('-')
        const newDate = splitted[2] + "/" + splitted[1] + "/" + splitted[0];
        console.log(newDate);
    }
    
    return (
        // <div className="card">
        //     <input type="checkbox" className="checkBox"/>
        //     <h6 className="date">by: {dueDate}</h6>
        <div className="card">
            <div className="grid-container">
                <div className="grid-item">
                    <input type="checkbox"/>
                </div>
                <div className="grid-item">
                    <h1 style={{fontSize: '30px', marginBottom: '-20px'}}>{title}</h1>
                    {tagList.map((tagObject: {name1: string, index1: number}, index: number) => {
                        return <Tag name={tagObject.name1} key={tagObject.index1} theIndex={tagObject.index1} remove={()=>{}} include={""}></Tag>
                    })}
                    </div>
                <div className="grid-item"><h6 style={{fontSize: "10px"}}>by: {dueDate}</h6></div>  
            </div>
        </div>
    )
}