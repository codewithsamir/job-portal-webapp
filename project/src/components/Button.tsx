import React from 'react'

const Button = ({color,name}:any) => {
  return (
    <div>
        <button className={`p-2 ${color}`}>{name}</button>
    </div>
  )
}

export default Button