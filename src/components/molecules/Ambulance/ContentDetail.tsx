import React from 'react'
import TitleSection from '../../atomics/text/TitleSection'
import { FiPhoneCall } from 'react-icons/fi'

const ContentDetail = () => {
    return (
        <div className='md:pr-7'>
            <TitleSection
                title='Butuh Bantuan Ambulance?'
                subtitle='Ambulance untuk warga'
                classes='mb-5'
            />

            <div>
                <p className='mb-5'>
                    Bantuan ambulance untuk warga yang sedang membutuhkan ambulance segera, bantuan ini tidak dipungut biaya apapun, 
                    langsung hubungi kontak dibawah ini.
                </p>

                <div className='flex flex-row flex-wrap md:flex-nowrap items-center bg-line-long-pattern p-5'>
                    <div className='flex-grow-0 flex-shrink pr-5'>
                        <i className='text-blue-500 text-7xl'>
                            <FiPhoneCall />
                        </i>
                    </div>

                    <div className='flex-grow flex-shrink pr-5'>
                        <span>Hubungi Kami</span>
                        <h5 className='text-2xl font-bold text-black-800'>+62 123-456-7890</h5>
                    </div>

                    <div className='flex-grow pt-3 md:pt-0 md:flex-grow-0 w-full md:w-auto flex-shrink pr-5'>
                        <a className='button-primary' href="#">Kontak Kami</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentDetail
