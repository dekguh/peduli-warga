import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    src: string;
    url: string;
    title: string;
    alt: string;
}

const ServiceBoxSmall: React.FC<Props> = ({ src, url, title, alt }) => {
    return (
        <div className='rounded-4px bg-gray-100 py-6 px-9 text-center'>
            <img
                src={src}
                alt={alt}
                className='w-9 mx-auto'
            />

            <div className='mt-2'>
                <span className='hover:text-blue-500 duration-300'>
                    <Link to={url}>
                        {title}
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default ServiceBoxSmall
