import React from 'react'
import locationIcon from '@iconify/icons-mdi/fire-alert';
import {Icon} from '@iconify/react'

export const LocationMarker = ({lat, lng, onClick}) => {
    return (
        <div className = 'location-marker' onClick = {onClick}>
            <Icon  
                className = 'location-icon'
                icon = {locationIcon}
            />
        </div>
    )
}
