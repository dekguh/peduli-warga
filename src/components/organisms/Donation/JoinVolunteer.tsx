import React from 'react'
import DetailJoinVolunteer from '../../molecules/Donation/DetailJoinVolunteer'
import ImageJoinVolunteer from '../../molecules/Donation/ImageJoinVolunteer'

const JoinVolunteer: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row flex-nowrap items-center'>
                <div className='flex-grow-0 flex-shrink w-full xl:w-6/12 px-3 mb-6 xl:mb-0'>
                    <ImageJoinVolunteer />
                </div>

                <div className='flex-grow-0 flex-shrink w-full xl:w-6/12 px-3'>
                    <DetailJoinVolunteer />
                </div>
            </div>
        </div>
    )
}

export default JoinVolunteer
