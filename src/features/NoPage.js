import React from 'react'

const NoPage = ({ error }) => {
    return (
        <>
            <div className='display-3 text-bg-danger text-center rounded-4' >
                Something went wrong. We can't get the data.
            </div>
            <br />
            <p className='display-6 text-center'>⛔{error}</p>
        </>
    )
}

export default NoPage;