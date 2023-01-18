import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

const ToastComponent = () => {
  return (
    <Toast>
      <ToastContainer className="bg-danger position-relative">
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Deleting profile success</strong>
        </Toast.Header>
        <Toast.Body className="text-white">User deleted successfully.</Toast.Body>
      </ToastContainer>
    </Toast>
  )
}

export default ToastComponent