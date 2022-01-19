import React from 'react'
import './Tag.css'

function Tag({name}: {name: string}) {
    return (
        <div className='Tag'>
            <p>x {name}</p>
        </div>
    )
}

export default Tag
