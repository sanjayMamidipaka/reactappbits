import React, { EventHandler } from 'react'
import Tag from './Tag';
import './TodoItem.css';

export default function TodoItem({todoListItem, index}: {todoListItem: any, index: string}) {
    const {title, dueDate, tagList, completed} = todoListItem;
    
    return (
        <div className="card">
            <form>
                <input type="checkbox" className="checkBox"/>
            </form>
        </div>
    )
}