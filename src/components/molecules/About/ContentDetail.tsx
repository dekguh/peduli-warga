import React from 'react'
import BoxBenefit from '../../atomics/box/BoxBenefit'
import TitleSection from '../../atomics/text/TitleSection'
import { AiOutlineLaptop } from 'react-icons/ai'
import { IoMdPaper } from 'react-icons/io'

const ContentDetail: React.FC = () => {
    return (
        <div className='pl-6'>
            <TitleSection
                subtitle='Kenal kami lebih dekat'
                title='Tentang Kami'
                classes='mb-5'
            />

            <p>
                Kami merupakan platform untuk kemanusiaan yang berdiri sejak tahun 2020, dengan fitur temukan lokasi tes covid, donasi dan vaksinasi. 
                diharapkan dengan adanya platform ini akan banyak membantu warga.
            </p>

            <div className='mt-5'>
                <div className='flex flex-col lg:flex-row flex-nowrap mb-5'>
                    <div className='flex-grow lg:flex-grow-0 flex-shrink w-full lg:w-6/12 pb-5 lg:pb-0 lg:pr-3'>
                        <BoxBenefit
                            title='Kemudahaan Akses'
                            description='Website sangat mudah diakses dari berbagai device'
                            icon={<AiOutlineLaptop />}
                        />
                    </div>

                    <div className='flex-grow lg:flex-grow-0 flex-shrink w-full lg:w-6/12 lg:pl-3'>
                        <BoxBenefit
                            title='Informasi Lengkap'
                            description='Dapatkan informasi secara lengkap tentang kesehatan'
                            icon={<IoMdPaper />}
                        />
                    </div>
                </div>

                <a href='#' className='button-primary'>Lebih Detail</a>
            </div>
        </div>
    )
}

export default ContentDetail
