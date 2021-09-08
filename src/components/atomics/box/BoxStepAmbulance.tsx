import React from 'react'

interface Props {
    icon: JSX.Element;
    title: string;
    description: string;
}

const BoxStepAmbulance: React.FC<Props> = ({ icon, title, description }) => {
    return (
        <div className='flex flex-row flex-nowrap items-center'>
            <div className='flex-grow-0 flex-shrink pr-4'>
                <i className='text-blue-500 text-6xl'>
                    {icon}
                </i>
            </div>

            <div className='flex-grow flex-shrink'>
                <h5 className='mb-1'>{title}</h5>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default BoxStepAmbulance
