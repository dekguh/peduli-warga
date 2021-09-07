import React from 'react'
import TitleSection from '../../atomics/text/TitleSection'
import MapLocation from '../../molecules/Donation/MapLocation'
import DetailContent from '../../molecules/Donation/DetailContent'

const Donation: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row flex-nowrap items-center'>
                <div className='flex-grow lg:flex-grow-0 flex-shrink p-3 w-full lg:w-6/12 xl:w-4/12'>
                    <DetailContent />
                </div>

                <div className='flex-grow lg:flex-grow-0 flex-shrink p-3 w-full lg:w-6/12 xl:w-8/12'>
                    <TitleSection
                        subtitle='Dari Rakyat Untuk Rakyat'
                        title='Pos Sembako Terdekat'
                        classes='mb-4'
                    />

                    <div className='mb-5'>
                        <p>
                            Temukan pos sembako terdekat untuk ada yang sedang membutuhkan 
                            dan juga anda yang ingin ikut membantu memberikan bantuan pangan, 
                            bisa langsung datang ke pos terdekat.
                        </p>
                    </div>
                    <MapLocation />
                </div>
            </div>
        </div>
    )
}

export default Donation