import React from 'react'
import BoxHistory from '../../atomics/box/BoxHistory'
import TitleSection from '../../atomics/text/TitleSection'

const HistoryDetail: React.FC = () => {
    return (
    <>
        <TitleSection
            title='Sejarah Platform'
            subtitle='Ketahui perkalan kami'
            classes='mb-12 text-center'
        />

        <div className='flex flex-col lg:flex-row flex-nowrap items-stretch'>
            <div className='flex-grow flex-shrink w-full lg:w-6/12'>
                <BoxHistory
                    position='left'
                    classes='text-left lg:text-right'
                    title='Mulai Berdiri'
                    month='Mei'
                    year={2020}
                    description='platform ini berdiri pada tahun 2020 di bulan mei, berawal dari keresahan terhadap pandemi covid-19'
                />

                <BoxHistory
                    position='left'
                    classes='text-left lg:text-right pt-7 lg:pt-24'
                    title='100+ Relawan'
                    month='Desember'
                    year={2020}
                    description='pada bulan desember, platform telah memiliki lebih dari 100 relawan yang tersebar diseluruh indonesia'
                />
            </div>

            <div className='flex-grow flex-shrink w-full lg:w-6/12'>
                <BoxHistory
                    position='right'
                    classes='text-left pt-7 lg:pt-24'
                    title='Mendapatkan Penghargaan'
                    month='Agustus'
                    year={2020}
                    description='mendapatkan penghargaan sebagai platform pemberi solusi ke masyarakat secara langsung'
                />

                <BoxHistory
                    position='right'
                    classes='text-left pt-7 lg:pt-24'
                    title='100+ Posko Donasi'
                    month='Januari'
                    year={2021}
                    description='kami telah mendirikan lebih 100 posko donasi yang tersebar diseluruh wilayah indonesia'
                />
            </div>
        </div>
    </>
    )
}

export default HistoryDetail
