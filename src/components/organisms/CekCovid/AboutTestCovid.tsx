import React from 'react'
import AboutCekCovidDetail from '../../molecules/CekCovid/AboutCekCovidDetail'
import AboutCekCovidImage from '../../molecules/CekCovid/AboutCekCovidImage'

const AboutTestCovid: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row flex-nowrap items-center'>
                <div className='flex-grow xl:flex-grow-0 flex-shrink w-full xl:w-5/12 2xl:w-6/12 p-3'>
                    <AboutCekCovidDetail />
                </div>

                <div className='mt-14 xl:mt-0 flex-grow xl:flex-grow-0 flex-shrink w-full xl:w-7/12 2xl:w-6/12 p-3'>
                    <AboutCekCovidImage />
                </div>
            </div>
        </div>
    )
}

export default AboutTestCovid
