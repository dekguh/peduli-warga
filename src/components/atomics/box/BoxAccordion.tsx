import React, { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

interface Props {
    classes?: string;
    title?: string;
    description?: string;
}

const BoxAccordion: React.FC<Props> = ({ classes, title, description }) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    return (
        <div className={classes}>
            <button
                onClick={e => setIsActive(!isActive)}
                className={`${isActive ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white'} px-5 py-4 flex flex-row flex-nowrap items-center border border-gray-200 rounded-sm w-full hover:bg-blue-500 hover:border-blue-500 hover:text-white duration-300`}
            >
                <div className='flex-grow flex-shrink text-left'>
                    <span>{title}</span>
                </div>

                <div className='flex-grow-0 flex-shrink'>
                    <span className='relative'>
                        <i className={`absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 duration-300 ${isActive ? 'rotate-90' : 'rotate-0'}`}>
                            <FiChevronRight />
                        </i>
                    </span>
                </div>
            </button>

            <div className='border border-gray-200 border-t-0 relative overflow-hidden'>
                <div className={`px-5 py-4 ${isActive ? 'relative top-0 opacity-100' : 'absolute -top-full opacity-0'} duration-500`}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default BoxAccordion
