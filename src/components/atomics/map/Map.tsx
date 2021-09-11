import React, { ReactElement, ReactNode } from 'react'
import L, { LatLngExpression } from 'leaflet'
import { MapConsumerProps, MapContainer, TileLayer } from 'react-leaflet'

/**
 * @interface Props
 * @containerClass class name for map container
 * @zoom default zoom for map
 * @coordinate map default view ([latitude, longitude])
 */

interface Props {
    containerClass?: string;
    zoom?: number;
    coordinate?: LatLngExpression | undefined;
    children?: JSX.Element | ReactNode;
}

const Map: React.FC<Props> = ({ containerClass, zoom, coordinate, children }) => {
    return (
        <MapContainer
            className={containerClass ? containerClass : 'h-96 w-full'}
            center={coordinate ? coordinate : [-8.650000, 115.188919]}
            zoom={zoom ? zoom : 12}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    )
}

export default Map
