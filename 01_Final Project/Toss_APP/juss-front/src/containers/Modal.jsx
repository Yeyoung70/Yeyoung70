import React, { Children } from 'react'

import './Modal.css'

const Modal = ( {children, closeModal} ) => {
  return (
    <div className='Modal' onClick={(e) =>
        e.target.className ?
          e.target.className === 'Modal' ? closeModal() : null : null }>
        { children }
    </div>
  )
}

export default Modal