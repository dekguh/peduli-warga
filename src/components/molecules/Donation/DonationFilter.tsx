import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getListDistrict, getListProvince } from '../../utils/data'
import { updateDonationSearchDistrict, updateDonationSearchProvince } from '../../utils/redux/search/SearchAction'
import { IMapDispatch } from '../../utils/redux/search/SearchReduce'

interface Props extends IMapDispatch {}

const DonationFilter: React.FC<Props> = ({ updateSearchProvinceAct, updateSearchDistrictAct }) => {
    const [listProvince, setListProvince] = useState<Array<any> | undefined>()
    const [listDistrict, setListDistrict] = useState<Array<any> | undefined>()
    useEffect(() => {
        const dataIndonesia: Array<{}> = getListProvince()
        setListProvince(dataIndonesia)
    }, [])

    return (
        <div className='container mx-auto mb-12 px-3'>
            <div className='flex flex-row flex-nowrap'>
                <div className='flex-grow-0 flex-shrink w-6/12 pr-5'>
                    <label className='label'>provinsi</label>
                    <select className='input-primary' onChange={e => {
                        updateSearchProvinceAct(e.target.value)
                        setListDistrict(getListDistrict(e.target.value))
                    }}>
                        <option value=''>semua provinsi</option>
                        {listProvince && listProvince.map((data, i) => (
                            <option key={i} value={data}>{data.toLowerCase()}</option>
                        ))}
                    </select>
                </div>

                <div className='flex-grow-0 flex-shrink w-6/12'>
                    <label className='label'>kabupaten</label>
                    <select className='input-primary' onChange={e => updateSearchDistrictAct(e.target.value)}>
                    <option value=''>semua kabupaten</option>
                        {listDistrict && listDistrict.map((data, i) => (
                            <option key={i} value={data}>{data.toLowerCase()}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateSearchProvinceAct: (search: string) => dispatch(updateDonationSearchProvince(search)),
        updateSearchDistrictAct: (search: string) => dispatch(updateDonationSearchDistrict(search)),
    }
}

export default connect<{}, IMapDispatch, {}>(null, mapDispatchToProps)(DonationFilter)
