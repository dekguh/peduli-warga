import React from 'react'
import BoxStepAmbulance from '../../atomics/box/BoxStepAmbulance'
import { FiPhoneForwarded, FiMessageCircle, FiMapPin } from 'react-icons/fi'

const StepDetail = () => {
    return (
        <ul className='last:mb-5 last:pb-0'>
            <li className='mb-5 border-b border-gray-200 pb-5'>
                <BoxStepAmbulance
                    icon={<FiPhoneForwarded className='stroke-1' />}
                    title='Hubungi Kami'
                    description='hubungi nomor kontak  yang tertera untuk bantuan ambulance segera'
                />
            </li>

            <li className='mb-5 border-b border-gray-200 pb-5'>
                <BoxStepAmbulance
                    icon={<FiMessageCircle className='stroke-1' />}
                    title='Jelaskan Bantuan'
                    description='jelaskan secara detail bantuan ambulance apa yang anda butuhkan'
                />
            </li>

            <li className='mb-5'>
                <BoxStepAmbulance
                    icon={<FiMapPin className='stroke-1' />}
                    title='Bagikan Lokasi'
                    description='bagikan lokasi anda agar kami bisa memberitahu relawan terdekat'
                />
            </li>
        </ul>
    )
}

export default StepDetail
