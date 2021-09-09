import React, { MouseEventHandler } from 'react'
import DotSmallPattern from '../../../images/dot-small-pattern.png'

interface Props {
    photo: string;
    isOnline: boolean;
    name: string;
    onClickLink?: MouseEventHandler
}

const BoxCustomerLive: React.FC<Props> = ({ photo, name, isOnline, onClickLink }) => {
    return (
        <div className='relative'>
            <img src={DotSmallPattern} alt='dot small pattern' className='absolute -top-4 -left-4' />
            <div className='rounded-md bg-white shadow-primary p-5 w-full max-w-270px relative'>
                <div className='flex flex-row flex-nowrap items-center'>
                    <div className='flex-grow-0 flex-shrink relative'>
                        <img
                            src={photo}
                            alt="customer support"
                            className='w-14'
                        />

                        <div className={`absolute -right-px top-1 h-3 w-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-400'}`}></div>
                    </div>

                    <div className='flex-grow flex-shrink pl-4'>
                        <h5 className='text-lg'>{name}</h5>
                        <a onClick={onClickLink} href="#" className={`duration-300 ${isOnline ? 'text-green-500 hover:text-green-600' : 'text-red-400 hover:text-red-600'}`}>
                            {isOnline ? 'chat sekarang' : 'sedang offline'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxCustomerLive
