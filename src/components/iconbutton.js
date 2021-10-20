import React from 'react'
import '../App.css';

function IconButton({icon, title, onClick}) {
    return (
        <span className='hero-cta'><img src={icon} width='30' height='30' alt="cta-icon" className='btn-icon' onClick={onClick}/>{title}</span>
    )
}

export default IconButton
