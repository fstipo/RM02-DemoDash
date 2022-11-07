import React from 'react'
import Table from 'react-bootstrap/Table';
import TableBody from './TableBody';
import TableHead from './TableHead';
import "../../main.css"

const History = ({ history, id }) => {
    return (
        <div className='mt-1 p-3 table-responsive'>
            <Table striped bordered hover className='p-4' >
                <TableHead data={history} userId={id} />
                <TableBody data={history} />
            </Table>
        </div >
    );
}


export default History;





