import React from 'react'
import './Tag.css'

function Tag({name, theIndex, remove}: {name: string, theIndex: number, remove: Function}) {
    return (
        <p className='Tag' onClick={(e) => remove(myIndex)>
            x {name}
        </p>
    )
}

export default Tag
