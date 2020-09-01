import React from 'react'
import './button.scss'

const Button = ({rest, title}) => {
    return (
        <div>
            <button className="button" {...rest}>{title}</button>
        </div>
    )
}

export default Button
