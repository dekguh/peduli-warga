import React from 'react'
import ContentImage from '../../molecules/About/ContentImage'
import ContentDetail from '../../molecules/About/ContentDetail'

interface Props {
    isButtonRedirect: boolean;
}

const About: React.FC<Props> = ({ isButtonRedirect }) => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row flex-nowrap items-center'>
                <div className='flex-grow xl:flex-grow-0 flex-shrink w-full xl:w-5/12 2xl:w-6/12 p-3'>
                    <ContentImage />
                </div>

                <div className='mt-14 xl:mt-0 flex-grow xl:flex-grow-0 flex-shrink w-full xl:w-7/12 2xl:w-6/12 p-3'>
                    <ContentDetail isButtonRedirect={isButtonRedirect} />
                </div>
            </div>
        </div>
    )
}

export default About
