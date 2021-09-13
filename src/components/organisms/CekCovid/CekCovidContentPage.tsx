import React, { useState, useEffect } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { connect, ConnectedProps } from 'react-redux'
import BoxDonation from '../../atomics/box/BoxDonation'
import CekCovidFilter from '../../molecules/CekCovid/CekCovidFilter'
import CekCovidMap from '../../molecules/CekCovid/CekCovidMap'
import { dataCekCovidLocation, TDataCekCovidLocation } from '../../utils/data'
import { RootState } from '../../utils/redux/Store'

const mapStateToProps = (state: RootState) => {
    return {
        searchProvince: state.search.cekcovidProvince,
        searchDistrict: state.search.cekcovidDistrict,
    }
}

const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {}

const CekCovidContentPage: React.FC<Props> = ({ searchProvince, searchDistrict }) => {
    const [coordinate, setCoordinate] = useState<L.LatLngExpression | undefined>()
    const [dataList, setDataList] = useState<TDataCekCovidLocation>(dataCekCovidLocation)
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        const dataFilter = dataCekCovidLocation.filter(data => {
            return data.province.toLowerCase().indexOf(searchProvince?.toLowerCase()) > -1
            && data.district.toLowerCase().indexOf(searchDistrict?.toLowerCase()) > -1
        })

        setDataList(dataFilter)
    }, [searchProvince, searchDistrict])

    return (
        <>
            <CekCovidFilter />

            <div className='flex flex-col md:flex-row flex-nowrap'>
            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-5/12 2xl:w-4/12'>
                <div className={`fixed left-0 top-0 bottom-0 w-80 z-20 bg-white py-4 px-4 ${isActive ? 'left-0' : '-left-80'} duration-1000 md:px-8 md:relative md:left-unset md:top-unset md:bottom-unset md:w-full`}>
                    <button onClick={e => setIsActive(!isActive)} className='button-primary absolute -right-12 top-2/4 px-4 py-5 z-10 md:hidden'>
                        <i className='text-white'>
                            {isActive
                                ? <FiChevronsLeft />
                                : <FiChevronsRight />
                            }
                        </i>
                    </button>

                    <div className='overflow-y-auto h-screen'>
                    {dataList && dataList.map((data, i) => (
                        <div className='mb-5' key={i}>
                            <BoxDonation
                                logo={data.logo}
                                name={data.name}
                                location={`${data.district}, ${data.province}`}
                                time={data.time}
                                btnClick={e => setCoordinate([data.lang, data.long])}
                            />
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 xl:w-7/12 2xl:w-8/12'>
                <CekCovidMap containerClasses='h-screen w-full relative z-10' flyToCoor={coordinate} />
            </div>
        </div>
        </>
    )
}

export default connector(CekCovidContentPage)
