
import React from 'react'

function Button({className, children, onClick,}) {
  return (
        <button className={`font-bold py-[.8rem] px-[2rem] ${className}`}
        onClick={onClick}>
            {children}
          </button>
  )
}

export default Button
