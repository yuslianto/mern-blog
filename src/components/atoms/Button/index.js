import React from 'react'
import './button.scss'

const Button = ({rest, title}) => {
    return <button className="button" {...rest}>{title}</button>
}

export default Button
