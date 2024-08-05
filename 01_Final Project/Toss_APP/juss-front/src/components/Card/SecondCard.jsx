import React from 'react'

import "./SecondCard.css"

const SecondCard = ( { title, subTitle, Child, handleClick } ) => {
  
  return (
    <div className="SecondCard" onClick={
        (event) => {
          // console.log(event.target);
          // event.target.parentElement
          try {
          return  handleClick ? 
            event.target.className === 'SecondCard'
            ||
            event.target.parentElement.className.includes('card') ?
              handleClick() : null : null
        } catch (error) { }
      }
    }>
        <div className="card-left">
            <div className="card-icon"></div>
            <div className="card-info">
            <div className='card-title'> { title } </div>
            <div className='card-sub-title'>{ subTitle }</div>
            </div>
        </div>
        <div className="right">
            { Child }
        </div>
    </div>
  )
}

export default SecondCard