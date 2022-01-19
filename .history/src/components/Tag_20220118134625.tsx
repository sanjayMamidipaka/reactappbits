import React from 'react'
import './Tag.css'

function Tag({name, theIndex, remove}: {name: string, theIndex: string, remove: Function}) {
    return (
        <p className='Tag' onClick={(e) => remove(theIndex)}>
            x {name}
        </p>
    )
}

export default Tag
