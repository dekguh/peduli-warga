import React, { useState, useEffect } from 'react'
import { MapConsumer, Popup } from 'react-leaflet'
import { connect, ConnectedProps } from 'react-redux'
import Map from '../../atomics/map/Map'
import MarkerCustom from '../../atomics/map/MarkerCustom'
import { dataVaksinasiLocation, TDataVaksinasiLocation } from '../../utils/data'
import { RootState } from '../../utils/redux/Store'

const mapStateToProps = (state: RootState) => {
    return {
        searchProvince: state.search.vaksinasiProvince,
        searchDistrict: state.search.vaksinasiDistrict,
    }
}

const connector = connect(mapStateToProps, {})
type ReduxToProps = ConnectedProps<typeof connector>

interface Props extends ReduxToProps {
    containerClasses?: string;
    flyToCoor?: L.LatLngExpression;
}

const VaksinasiLocationMap: React.FC<Props> = ({ containerClasses, flyToCoor, searchProvince, searchDistrict }) => {
    const [dataList, setDataList] = useState<TDataVaksinasiLocation>(dataVaksinasiLocation)

    useEffect(() => {
        const dataFilter = dataVaksinasiLocation.filter(data => {
            return data.province.toLowerCase().indexOf(searchProvince?.toLowerCase()) > -1
            && data.district.toLowerCase().indexOf(searchDistrict?.toLowerCase()) > -1
        })

        setDataList(dataFilter)
    }, [searchProvince, searchDistrict])

    return (
        <div className='relative z-10'>
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
                            <h6 className='font-bold mb-1'>{data.name}</h6>
                            <p className='mb-0 mt-0'>{data.description}</p>
                        </Popup>
                    </MarkerCustom>
                ))}
            </Map>
        </div>
    )
}

export default connector(VaksinasiLocationMap)
