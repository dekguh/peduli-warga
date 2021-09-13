import React from 'react'

interface Props {
    src: string;
    name: string;
    position: string;
}

const BoxFounder: React.FC<Props> = ({ src, name, position }) => {
    return (
        <div className='bg-blue-500 p-5 inline-block rounded-md'>
            <div className='mb-2'>
                <img src={src} alt="founder" className='mx-auto' />
            </div>
            <div className='text-center'>
                <h5 className='text-white'>{name}</h5>
                <span className='text-white'>{position}</span>
            </div>
        </div>
    )
}

export default BoxFounder
