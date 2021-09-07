import React from 'react'

interface Props {
    icon: JSX.Element;
    title: string;
    description: string;
}

const BoxBenefit: React.FC<Props> = ({ icon, title, description }) => {
    return (
        <div className='shadow-primary bg-white rounded-md p-5 flex flex-row flex-nowrap items-center'>
            <div className='flex-grow-0 flex-shrink'>
                <div className='bg-line-small-pattern bg-no-repeat bg-cover bg-center rounded w-16 h-16 relative mx-auto'>
                    <div className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'>
                        <i className='text-blue-500 text-3xl'>
                            {icon}
                        </i>
                    </div>
                </div>
            </div>

            <div className='flex-grow flex-shrink pl-4'>
                <h5 className='mb-1'>{title}</h5>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default BoxBenefit
