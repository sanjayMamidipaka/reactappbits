import React from 'react'
import './Tag.css'

function Tag({name, theIndex, remove}: {name: string, theIndex: number, remove: Function, include: string}) {
    return (
        <p className='Tag' onClick={(e) => remove(theIndex)}>
            {include} {name}
        </p>
    )
}

export default Tag
