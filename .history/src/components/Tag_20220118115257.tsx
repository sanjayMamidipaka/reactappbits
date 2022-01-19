import React from 'react'
import './Tag.css'

function Tag({name}: {name: string}) {
    return (
        <p className='Tag'>
            x {name}
        </p>
    )
}

export default Tag
