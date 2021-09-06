import React from 'react'
import CountUp from 'react-countup'
import iconWaveCurved from '../../../images/wave-curved.png'

interface Props {
    number: number;
    duration?: number;
    title: string;
}

const BoxCounter: React.FC<Props> = ({ number, duration, title }) => {
    return (
    <div className='relative'>
        <div className='rounded-md bg-white shadow-primary p-5 w-36 text-center relative'>
            <CountUp
                end={number}
                duration={duration ? duration : 5}
                className='text-4xl font-bold text-gray-800 block'
            />

            <span className='block text-blue-500'>{title}</span>
        </div>
        <img src={iconWaveCurved} className='w-16 absolute top-1 z-0 -left-4' />
    </div>
    )
}

export default BoxCounter
