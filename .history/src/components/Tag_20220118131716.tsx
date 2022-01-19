import React from 'react'
import './Tag.css'

function Tag({name, theIndex, remove}: {name: string, theIndex: number, remove: function}) {
    return (
        <p className='Tag'>
            x {name}
        </p>
    )
}

export default Tag
