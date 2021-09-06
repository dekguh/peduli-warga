import React from 'react'
import { Popup } from 'react-leaflet'
import Map from '../../atomics/map/Map'
import MarkerCustom from '../../atomics/map/MarkerCustom'
import { dataDonationLocation } from '../../utils/data'

const MapLocation: React.FC = () => {
    return (
        <div>
            <Map containerClass='rounded-md w-full h-64'>
                {dataDonationLocation && dataDonationLocation.map((data, i) => (
                    <MarkerCustom key={i} coordinate={[data.lang, data.long]}>
                        <Popup>
                            <h6 className='font-bold mb-1'>{data.organization}</h6>
                            <p className='mb-0 mt-0'>{data.description}</p>
                        </Popup>
                    </MarkerCustom>
                ))}
            </Map>
        </div>
    )
}

export default MapLocation
