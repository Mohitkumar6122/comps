import React from 'react'

function Button({ children, outline, rounded, primary}) {
  return (
    <button>{children}</button>
  )
}

export default Button