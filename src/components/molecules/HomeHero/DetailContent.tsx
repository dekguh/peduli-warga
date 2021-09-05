import React from 'react'
import ServiceBoxSmall from '../../atomics/box/ServiceBoxSmall'
import IconPemeriksaan from '../../../images/icon/service/pemeriksaan.svg'
import IconDonasi from '../../../images/icon/service/donasi.svg'
import IconVaksinasi from '../../../images/icon/service/vaksinasi.svg'
import IconKonsultasi from '../../../images/icon/service/konsultasi.svg'

const DetailContent: React.FC = () => {
    return (
        <div>
            <h1 className='text-4xl md:text-5xl leading-tight'>Solusi Platform Untuk Kemanusiaan</h1>
            <div className='bg-blue-500 h-1 w-16 mt-3 mb-5'></div>

            <ul className='flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-stretch last:pr-0'>
                <li className='flex-grow md:flex-grow-0 flex-shrink px-5 md:px-0 md:pr-5 sm:w-6/12 md:w-3/12 mb-5 md:mb-0'>
                    <ServiceBoxSmall
                        title='Pemeriksaan'
                        url='#'
                        alt='icon pemeriksaan'
                        src={IconPemeriksaan}
                    />
                </li>

                <li className='flex-grow md:flex-grow-0 flex-shrink px-5 md:px-0 md:pr-5 sm:w-6/12 md:w-3/12 mb-5 md:mb-0'>
                    <ServiceBoxSmall
                        title='Donasi'
                        url='#'
                        alt='icon donasi'
                        src={IconDonasi}
                    />
                </li>

                <li className='flex-grow md:flex-grow-0 flex-shrink px-5 md:px-0 md:pr-5 sm:w-6/12 md:w-3/12 mb-5 md:mb-0'>
                    <ServiceBoxSmall
                        title='Vaksinasi'
                        url='#'
                        alt='icon vaksinasi'
                        src={IconVaksinasi}
                    />
                </li>

                <li className='flex-grow md:flex-grow-0 flex-shrink px-5 md:px-0 md:pr-5 sm:w-6/12 md:w-3/12 mb-5 md:mb-0'>
                    <ServiceBoxSmall
                        title='Konsultasi'
                        url='#'
                        alt='icon konsultasi'
                        src={IconKonsultasi}
                    />
                </li>
            </ul>
        </div>
    )
}

export default DetailContent
