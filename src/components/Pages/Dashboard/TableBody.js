import React from 'react'

const TableBody = ({ data }) => {
    return (
        <tbody>
            {data ? data.map((el, index) => <tr key={index + 1}>
                {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
            </tr>) : null}

        </tbody>
    )
}

export default TableBody