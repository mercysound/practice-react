import React, { Component } from 'react'
// giving parent info from child Components

const Waytoseechild = (props) => {
  return (
    <div>
      <div className='header'>
        <h1>Header is here</h1>
      </div>
      <div className="middlechange">
        {props.children}
      </div>
      <div className='footer'>
        <h1>Footer</h1>
      </div>
    </div>
  )
}

export default Waytoseechild;