import React, { useState, useEffect } from 'react'
import { MapConsumer, Popup } from 'react-leaflet'
import Map from '../../atomics/map/Map'
import MarkerCustom from '../../atomics/map/MarkerCustom'
import { dataDonationLocation, IDataDonationLocation } from '../../utils/data'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../utils/redux/Store'

const mapStateToProps = (state: RootState ) => {
    return {
        searchProvince: state.search.donationProvince,
        searchDistrict: state.search.donationDistrict,
    }
}

const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
    containerClasses?: string;
    flyToCoor?: L.LatLngExpression;
}

const MapLocationPage: React.FC<Props> = ({ containerClasses, flyToCoor, searchProvince, searchDistrict }) => {
    const [dataList, setDataList] = useState<IDataDonationLocation>(dataDonationLocation)

    useEffect(() => {
        const dataFilter = dataDonationLocation.filter(data => {
            return data.province.toLowerCase().indexOf(searchProvince?.toLowerCase()) > -1
            && data.district.toLowerCase().indexOf(searchDistrict?.toLowerCase()) > -1
        })

        setDataList(dataFilter)
    }, [searchProvince, searchDistrict])

    return (
        <div>
            <Map containerClass={containerClasses}>
                <MapConsumer>
                    {map => {
                        flyToCoor && map.flyTo(flyToCoor, 17)
                        return null
                    }}
                </MapConsumer>
                {dataList && dataList.map((data, i) => (
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

export default connector(MapLocationPage)