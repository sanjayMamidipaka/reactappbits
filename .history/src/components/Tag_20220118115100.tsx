import React from 'react'
import './Tag.css'

function Tag({name}: {name: string}) {
    return (
        <div>
            <div className='Tag'>
            x {name}
        </div>&nbsp;
        </div>
    )
}

export default Tag
