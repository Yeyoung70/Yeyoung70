import React from 'react'

import "./Card.css"

const Card = ( { title, subTitle, Child, handleClick } ) => {
  
  return (
    <div className="Card" onClick={
        (event) => {
          // console.log(event.target);
          // event.target.parentElement
          return handleClick ? 
            event.target.className !== 'SubButton' ? 
              handleClick() : null : null
        }
      }>
        <div className="left">
            <div className="icon"></div>
            <div className="info">
            <div className='title'> { title } </div>
            <div className='sub-title'>{ subTitle }</div>
            </div>
        </div>
        <div className="right">
            { Child }
        </div>
    </div>
  )
}

export default Card