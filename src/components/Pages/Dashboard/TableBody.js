import React from 'react'

const TableBody = ({ data, option }) => {
    let bodyTemplate;
    if (option === "all") {
        bodyTemplate = <tbody>
            {data ? data.map((el, index) => <tr key={index + 1}>
                {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
            </tr>) : null}
        </tbody>
    }

    if (option === "in-moment") {
        bodyTemplate = <div className='display-6'>Hello In-Moment</div>
    }

    if (option === "select-dates") {
        bodyTemplate = <div className='display-6'>Hello Select Dates</div>
    }

    return (
        bodyTemplate
    )
}

export default TableBody