import React from 'react'
import TableMainRow from './TableMainRow'
import TableSelectDatesRow from './TableSelectDatesRow'

const TableHead = ({ data, id }) => {
    return (

        <thead>
            <TableMainRow data={data} />
            < TableSelectDatesRow userId={id} />
        </thead>

    )
}

export default TableHead