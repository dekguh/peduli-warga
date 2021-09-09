import React from 'react'
import DotSmallPattern from '../../../images/dot-small-pattern.png'

interface Props {
    icon?: JSX.Element;
    title: string;
    description: string;
}

const BoxContact: React.FC<Props> = ({ icon, title, description }) => {
    return (
        <div className='relative'>
            <img src={DotSmallPattern} alt='dot small pattern' className='absolute -top-4 -left-4' />
            <div className='rounded-2xl bg-white shadow-primary p-5 relative z-10'>
                <div className='p-3'>
                    <div className='bg-line-small-pattern bg-no-repeat bg-cover bg-center rounded w-20 h-20 relative mx-auto'>
                        {icon}
                    </div>
                </div>

                <div className='mt-1 p-3 text-center'>
                    <h5 className='text-xl mb-2 leading-tight'>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default BoxContact
