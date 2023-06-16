import React from 'react'
import button from '@/styles/Button.module.css'

function Button ({ nameButton}) {
    return (
        <div className={button.containerButton}>
            <button className={button.ButtonStyle}>{nameButton}</button>
        </div>
    )
}

export { Button };