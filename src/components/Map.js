import GoogleMapReact from 'google-map-react'
import { useState } from 'react'
import { LocationInfo } from './LocationInfo';
import { LocationMarker } from './LocationMarker'

export const Map = ({eventData, center, zoom}) => {

    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map( eventos => {
        if(eventos.categories[0].id === 8){
        
            const lat = eventos.geometries[0].coordinates[1]; 
            const lng = eventos.geometries[0].coordinates[0]
            return <LocationMarker  
                        lat = {lat}
                        lng = {lng}
                        onClick = { ()=>{
                            setLocationInfo({
                                id: eventos.id,
                                title: eventos.title
                            })
                        }}
                    />
        }

        return null;
    })

    return (
        <div className = 'map'>
            <GoogleMapReact 
                bootstrapURLKeys = {{key : 'AIzaSyD75Vd8jNOp3eegqQKGf9yhAT28N9NVtTI'}}
                defaultCenter = {center}
                defaultZoom = {zoom}
            >
               {markers} 
            </GoogleMapReact>
            {locationInfo && <LocationInfo info = {locationInfo}/>}
        </div>
    )
}

Map.defaultProps = {
    center : {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom : 6
}
