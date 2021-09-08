import React from 'react'
import ContentDetail from '../../molecules/Ambulance/ContentDetail'
import StepDetail from '../../molecules/Ambulance/StepDetail'

const Ambulance = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row flex-nowrap'>
                <div className='flex-grow xl:flex-grow-0 flex-shrink w-full xl:w-6/12 p-3'>
                    <ContentDetail />
                </div>

                <div className='flex-grow xl:flex-grow-0 flex-shrink w-full xl:w-6/12 p-3'>
                    <StepDetail />
                </div>
            </div>
        </div>
    )
}

export default Ambulance
