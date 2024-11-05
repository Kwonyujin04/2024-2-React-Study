import React from 'react'

export default function Menu({ menu_name, link }) {
    return (
        <div className="header-menu">
            <h3 href={link}>{menu_name}</h3>
        </div>
    )
}