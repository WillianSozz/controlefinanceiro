import React from 'react'
import './style.css'

export const ResumeItem = ({ title, Icon, value }) => {
    return (
        <div className='containerri'>
            <div className='headerri'>
                <div className='titleri'>
                    {title+"  "}{<Icon/>}
                </div>
                
            </div>
            <div className='totalri'>
                {value}
            </div>
        </div>
    )
}

export default ResumeItem;