import React from 'react'
import PeopleDonateImage from '../../../images/people-donate.png'
import BoxCounter from '../../atomics/box/BoxCounter'

const DetailContent: React.FC = () => {
    return (
        <div className='relative lg:pr-8'>
            <img
                src={PeopleDonateImage}
                alt="people donate image"
                className='max-w-550px w-full mx-auto'
            />

            <div className='absolute z-10 top-10 animate-slowbounce'>
                <BoxCounter
                    title='Volunteer'
                    number={200}
                />
            </div>

            <div className='absolute z-10 bottom-10 right-0 animate-slowbounce'>
                <BoxCounter
                    title='Organization'
                    number={50}
                />
            </div>
        </div>
    )
}

export default DetailContent
