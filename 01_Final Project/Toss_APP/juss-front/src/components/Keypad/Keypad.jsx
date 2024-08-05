import React from 'react'

import './Keypad.css'
import { FaArrowLeft } from 'react-icons/fa'

const Keypad = ({ changeValue }) => {

    const keys = [
      '1', '2', '3',
      '4', '5', '6',
      '7', '8', '9',
      '00', '0', <FaArrowLeft/>]

  return (
    <div className='Keypad'>
        {keys.map((key) => {
        return (
            <div key={key}
              className="key" 
              onClick={() => changeValue(key)}
              >
              { key }
            </div>
        )

    })}
    </div>
  )
}

export default Keypad