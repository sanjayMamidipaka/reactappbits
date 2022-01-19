import React from 'react'
import './Tag.css'

function Tag({name, theIndex, remove}: {name: string, theIndex: number, remove: Function, include}) {
    return (
        <p className='Tag' onClick={(e) => remove(theIndex)}>
            x {name}
        </p>
    )
}

export default Tag
