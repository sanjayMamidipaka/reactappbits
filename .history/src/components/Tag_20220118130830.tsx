import React from 'react'
import './Tag.css'

function Tag({name, theIndex}: {name: string, key: number}) {
    return (
        <p className='Tag'>
            x {name}
        </p>
    )
}

export default Tag
