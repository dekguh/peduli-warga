import React from 'react'
import { IoMdQuote } from 'react-icons/io'
import ListStar from '../list/ListStar'
import DotSmallPattern from '../../../images/dot-small-pattern.png'

interface Props {
    name: string;
    message: string;
    photo: string;
    totalStar: number;
    position: string;
}

const BoxTestimonial: React.FC<Props> = ({ name, message, photo, totalStar, position }) => {
    return (
    <div className='relative'>
        <img src={DotSmallPattern} alt='dot small pattern' className='absolute -top-4 -left-4' />

        <div className='rounded-md p-5 border border-gray-200 bg-white relative z-20'>
            <div className='flex flex-col lg:flex-row flex-nowrap items-center'>
                <i className='text-blue-500 text-4xl absolute -top-4 right-5'>
                    <IoMdQuote />
                </i>
                <div className='flex-grow lg:flex-grow-0 flex-shrink-0'>
                    <img src={photo} alt="testimonial" className='w-16 mx-auto mb-2' />
                    <ListStar totalRated={totalStar} />
                </div>

                <div className='flex-grow flex-shrink pt-4 lg:pt-0 lg:pl-4 text-center lg:text-left'>
                    <h5 className='font-semibold'>{name}</h5>
                    <span className='mb-2 text-sm text-blue-500 block'>{position}</span>
                    <p className='italic text-gray-500'>
                        "{message}"
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BoxTestimonial
