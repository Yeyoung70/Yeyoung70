import React from 'react'

import './FullButton.css'

const FullButton = ({text, handleClick}) => {
  return (
    <div className='FullButton'
        onClick={() => {handleClick()}}>
        {text}
        </div>
  )
}

export default FullButton