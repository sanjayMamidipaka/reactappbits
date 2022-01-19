import React from 'react'
import './Tag.css'

function Tag({name, key}: {name: string, index: number}) {
    return (
        <p className='Tag'>
            x {name}
        </p>
    )
}

export default Tag
