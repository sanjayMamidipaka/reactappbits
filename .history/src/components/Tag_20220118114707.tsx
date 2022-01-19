import React from 'react'
import './Tag.css'

function Tag({name}: {name: string}) {
    return (
        <div>
            <p>x {name}</p>
        </div>
    )
}

export default Tag
