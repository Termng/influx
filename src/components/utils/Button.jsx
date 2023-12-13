import React from 'react'

const Button = ({text, size, btnStyle}) => {
  const buttonClass = btnStyle === 'SecondaryBtn' ? 'SecondaryBtn' : 'PrimaryBtn';


  return (
   <button 
   className={buttonClass}
   
   style={{fontSize: size}}>
    <a href="/"> {text}</a>
    </button>
  )
}

export default Button