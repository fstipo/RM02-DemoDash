import React from 'react'

const TableMainRow = ({ data }) => {
    return (
        <tr key="0">
            {data ? Object.keys(data[0]).map((el, index) => <th className='text-center' key={index + 1}>{el}</th>) : null}
        </tr>
    )
}

export default TableMainRow