import React from 'react'
import ContentImage from '../../molecules/About/ContentImage'
import ContentDetail from '../../molecules/About/ContentDetail'

const About: React.FC = () => {
    return (
        <div className='mt-20 container mx-auto'>
            <div className='flex flex-col xl:flex-row flex-nowrap items-center'>
                <div className='flex-grow xl:flex-grow-0 flex-shrink w-full xl:w-5/12 2xl:w-6/12 p-3'>
                    <ContentImage />
                </div>

                <div className='mt-14 xl:mt-0 flex-grow xl:flex-grow-0 flex-shrink w-full xl:w-7/12 2xl:w-6/12 p-3'>
                    <ContentDetail />
                </div>
            </div>
        </div>
    )
}

export default About
