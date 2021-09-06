import React from 'react'
import L from 'leaflet'
import { Marker } from 'react-leaflet';

/**
 * @interface Props
 * @coordinate coordinate map of marker ([latitude, longitude])
 * @children content of marker (JSX Element)
 */

interface Props {
    coordinate: L.LatLngExpression;
    children?: JSX.Element;
}

const MarkerCustom: React.FC<Props> = ({ coordinate, children }) => {
    const markerIcon = L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        // specify the path here
        iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
    });

    return (
        <Marker
            position={coordinate}
            icon={markerIcon}
        >
            {children}
        </Marker>
    )
}

export default MarkerCustom
