import React from 'react'
import Map from '../../atomics/map/Map'
import MarkerCustom from '../../atomics/map/MarkerCustom'
import ContactListBox from '../../molecules/Contact/ContactListBox'
import CustomerSupport from '../../molecules/Contact/CustomerSupport'

const Contact: React.FC = () => {
    return (
    <>
        <div className='mt-20'>
            <CustomerSupport />
        </div>

        <div className='mt-20'>
            <ContactListBox />
        </div>

        <div className='mt-20'>
            <Map containerClass='w-full h-80'>
                <MarkerCustom
                    coordinate={[-8.792560, 115.215075]}
                ></MarkerCustom>
            </Map>
        </div>
    </>
    )
}

export default Contact
