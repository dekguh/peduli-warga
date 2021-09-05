import React from 'react'

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
                <a href={url} className='hover:text-blue-500'>
                    {title}
                </a>
            </div>
        </div>
    )
}

export default ServiceBoxSmall
