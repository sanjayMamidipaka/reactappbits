import React from 'react'
import './Tag.css'

function Tag({name, index}: {name: string}) {
    return (
        <p className='Tag'>
            x {name}
        </p>
    )
}

export default Tag
