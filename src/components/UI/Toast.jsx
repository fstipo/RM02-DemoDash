import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const createToast = (label, message) => toast.success(message,)

const Toast = (message, type) => toast({ message }, { type: { type } });;

export default Toast