import React from 'react'
import './Tag.css'

function Tag({name, theIndex, remove}: {name: string, theIndex: number, remove: Function}) {
    return (
        <p className='Tag'>
            x {name}
        </p>
    )
}

export default Tag
