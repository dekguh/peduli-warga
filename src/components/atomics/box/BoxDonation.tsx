import React from 'react'
import { FiNavigation, FiClock, FiMapPin } from 'react-icons/fi'

interface Props {
    logo: string;
    name: string;
    time: string;
    location: string;
    btnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const BoxDonation: React.FC<Props> = ({ logo, name, time, location, btnClick }) => {
    return (
        <div className='relative'>
            <div className='rounded-2xl bg-white shadow-primary p-5 relative z-10'>
                <div className='flex flex-row flex-nowrap items-center'>
                    <div className='hidden md:block flex-grow-0 flex-shrink pr-4'>
                        <img className='w-16' src={logo} alt="organization" />
                    </div>

                    <div className='flex-grow flex-shrink'>
                        <h5 className='mb-1'>{name}</h5>
                        <div>
                            <ul className='flex flex-row flex-wrap'>
                                <li className='flex-grow-0 flex-shrink pr-4 pb-1'>
                                    <i className='text-blue-500 text-sm inline-block mr-1'><FiClock /></i>
                                    <span className='text-sm inline-block'>{time}</span>
                                </li>

                                <li className='flex-grow-0 flex-shrink pr-4 pb-1'>
                                    <i className='text-blue-500 text-sm inline-block mr-1'><FiMapPin /></i>
                                    <span className='text-sm inline-block'>{location}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex-grow-0 flex-shrink'>
                        <button className='button-primary rounded-md' onClick={btnClick}>
                            <i className='text-white'>
                                <FiNavigation className='stroke-1' />
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxDonation
