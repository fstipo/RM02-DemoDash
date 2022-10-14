import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import "../../main.css"

const History = ({ history }) => {

    return (
        <div className='card mt-1 p-3 table-responsive'>
            <Table striped bordered hover className='p-4' >
                <thead>
                    <tr key="0">
                        {history ? Object.keys(history[0]).map((el, index) => <th className='text-center' key={index + 1}>{el}</th>) : null}
                    </tr>
                </thead>
                <tbody>

                    {history ? history.map((el, index) => <tr key={index + 1}>
                        {Object.entries(el).map(([key, value], index) => <td key={index + 1}>{value}</td>)}
                    </tr>) : null}
                </tbody>
            </Table>
        </div >
    );
}


export default History;





