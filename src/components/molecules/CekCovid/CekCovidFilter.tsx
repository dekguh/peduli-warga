import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { getListDistrict, getListProvince } from '../../utils/data'
import { updateCekCovidSearchDistrict, updateCekCovidSearchProvince } from '../../utils/redux/search/SearchAction'

const mapDispatchToProps = {
    updateSearchProvinceAct: (search: string) => (updateCekCovidSearchProvince(search)),
    updateSearchDistrictAct: (search: string) => (updateCekCovidSearchDistrict(search))
}

const connector = connect(null, mapDispatchToProps)
type ReduxToProps = ConnectedProps<typeof connector>

interface Props extends ReduxToProps {}

const CekCovidFilter: React.FC<Props> = ({ updateSearchProvinceAct, updateSearchDistrictAct }) => {
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

export default connector(CekCovidFilter)
