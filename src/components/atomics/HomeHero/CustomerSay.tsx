import React from 'react'
import ListStar from '../list/ListStar'
import { IoMdQuote } from 'react-icons/io'

interface Props {
    src: string;
    name: string;
    totalRated: number
}

const CustomerSay: React.FC<Props> = ({ src, name, totalRated }) => {
    return (
        <div className='bg-white p-4 shadow-primary rounded-4px max-w-sm'>
            <div className='flex flex-row flex-nowrap items-center'>
                <div className='flex-grow-0 flex-shrink pr-3'>
                    <img
                        src={src}
                        alt='customer photo'
                        className='w-16'
                    />
                </div>

                <div className='flex-grow flex-shrink pr-3'>
                    <h5 className='mb-1'>{name}</h5>
                    <ListStar totalRated={totalRated} />
                </div>

                <div className='flex-grow-0 flex-shrink'>
                    <i className='text-blue-500 text-5xl'>
                        <IoMdQuote />
                    </i>
                </div>
            </div>
        </div>
    )
}

export default CustomerSay
