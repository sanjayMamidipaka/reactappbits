import React from 'react'
import './Tag.css'

function Tag({name}: {name: string}) {
    return (
        <div className = 'tag'>
            x {name}
        </div>
    )
}

export default Tag
