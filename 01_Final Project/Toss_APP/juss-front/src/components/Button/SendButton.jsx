import React from 'react'

import './SendButton.css'

const SendButton = ( { text, handleClick } ) => {
  return (
    <div className='SendButton'
        onClick={() => {handleClick()}}>
        {text}
    </div>
  )
}

export default SendButton