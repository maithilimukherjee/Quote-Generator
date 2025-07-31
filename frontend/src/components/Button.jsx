import React from 'react'
import './Button.css'

const Button = ({ title, disabled, onClick }) => {
  if (disabled) return null

  return (
    <div>
      <button className='buttons' onClick={onClick}>
        {title || 'Click Me'}
      </button>
    </div>
  )
}

export default Button
