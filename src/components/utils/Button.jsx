import React from 'react'

const Button = ({text, size}) => {
  return (
   <button 
   className='PrimaryBtn'
   
   style={{fontSize: size}}>
    <a href="/"> {text}</a>
    </button>
  )
}

export default Button