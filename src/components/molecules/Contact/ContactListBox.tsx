import React from 'react'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import BoxContact from '../../atomics/box/BoxContact'
import TitleSection from '../../atomics/text/TitleSection'
import { webInfo } from '../../utils/data'

const ContactListBox: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-row flex-wrap lg:flex-nowrap items-center'>
                <div className='flex-grow md:flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 p-3'>
                    <TitleSection
                        title='Hubungi Peduli Warga Dengan Mudah'
                        subtitle='Hubungi Kami'
                        classes='mb-5 md:mb-0'
                    />
                </div>

                <div className='flex-grow md:flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 p-3'>
                    <BoxContact
                        title='Telpon'
                        description={webInfo.phone}
                        icon={<FiPhoneCall className='w-9 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-4xl stroke-1 text-blue-500' />}
                    />
                </div>

                <div className='flex-grow md:flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 p-3'>
                    <BoxContact
                        title='E-mail'
                        description={webInfo.email}
                        icon={<FiMail className='w-9 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-4xl stroke-1 text-blue-500' />}
                    />
                </div>

                <div className='flex-grow md:flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 p-3'>
                    <BoxContact
                        title='Lokasi'
                        description={webInfo.location}
                        icon={<FiMapPin className='w-9 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-4xl stroke-1 text-blue-500' />}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactListBox
