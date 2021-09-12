import React from 'react'
import ProkesBox from '../../atomics/box/ProkesBox'
import IconLocation from '../../../images/icon/vaksinasi/location.svg'
import IconCome from '../../../images/icon/vaksinasi/come-to-location.svg'
import IconVaccine from '../../../images/icon/vaksinasi/get-vaccine.svg'

const VaksinasiStepDetail: React.FC = () => {
    return (
        <div className='flex flex-col lg:flex-row flex-nowrap'>
            <div className='flex-grow lg:flex-grow-0 flex-shrink py-3 lg:py-8 px-5 w-full lg:w-4/12'>
                <ProkesBox
                    src={IconLocation}
                    alt='temukan lokasi'
                    title='Temukan Lokasi'
                    description='Temukan tempat vaksinasi terdekat sesuai dengan tempat anda tinggal'
                />
            </div>

            <div className='flex-grow lg:flex-grow-0 flex-shrink py-3 lg:py-8 px-5 w-full lg:w-4/12'>
                <ProkesBox
                    src={IconCome}
                    alt='datang kelokasi'
                    title='Datangai Lokasi'
                    description='Datang ketempat vaksin sesuai dengan jadwal dan alamat yang anda dapat'
                />
            </div>

            <div className='flex-grow lg:flex-grow-0 flex-shrink py-3 lg:py-8 px-5 w-full lg:w-4/12'>
                <ProkesBox
                    src={IconVaccine}
                    alt='dapatkan vaksinasi'
                    title='Dapatkan Vaksin'
                    description='Ikuti vaksinasi sesuai dengan arahan para nakes dan tetap ikuti protokol'
                />
            </div>
        </div>
    )
}

export default VaksinasiStepDetail
