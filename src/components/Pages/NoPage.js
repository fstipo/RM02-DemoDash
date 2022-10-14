import React from 'react'

const NoPage = ({ error }) => {
    return (
        <div className='display-3 text-bg-danger text-center rounded-4' > Error Status:{error
        }</div>
    )
}

export default NoPage;