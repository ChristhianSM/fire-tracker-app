import React from 'react'

export const LocationInfo = ({info}) => {
    return (
        <div className = 'location-info'>
            <ul>
                <li>Id : {info.id}</li>
                <li>Title : {info.title}</li>
            </ul>
        </div>
    )
}
