import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "./main.css"

const Container = () => {
  return (
    <div className='container-fluid'>
      <Row className='min-vh-100'>
        <Col className="sidebarP">1 of 2</Col>
        <Col className='bg-warning'>2 of 2</Col>
      </Row>
    </div>
  )
}

export default Container