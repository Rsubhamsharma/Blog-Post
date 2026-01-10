import React from 'react'
import { Link } from 'react-router-dom'


export default function Button({children,
    textColor = "white",
    bgColor = "bg-blue-600",
    type = 'button',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
  )
}


