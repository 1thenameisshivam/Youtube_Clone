import React from 'react'

const Button = ({name}) => {
  return (
    <button className='p-1 px-2 bg-slate-600 text-white m-1 rounded-lg text-lg ' >{name}</button>
  )
}

export default Button