import React from 'react'
import IconDotted from '../../../images/step-dot.png'
import DotSmallPattern from '../../../images/dot-small-pattern.png'

interface IBox {
    classes?: string;
    title: string;
    month: string;
    year: number;
    description: string;
}

const BoxLeft: React.FC<IBox> = ({ classes, title, month, year, description }) => {
    return (
        <div className={classes}>
            <div className='relative border-l lg:border-l-0 border-r-0 lg:border-r border-gray-200 pl-12 lg:pl-0 pr-0 lg:pr-12'>
                <img src={IconDotted} alt='icon' className='w-8 mx-auto mt-1 absolute z-10 transform -left-4 lg:left-unset right-unset lg:-right-4 hover:scale-110 duration-300 cursor-pointer' />

                <div className='lg:max-w-350px w-full relative ml-auto'>
                    <img src={DotSmallPattern} alt='dot small pattern' className='absolute -top-4 -left-4' />

                    <div className='relative z-10 p-5 rounded-lg bg-white shadow-primary border border-gray-100'>
                        <span className='text-sm text-blue-500 block'>{month} - {year}</span>
                        <h5 className='mb-2 text-lg'>{title}</h5>

                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BoxRight: React.FC<IBox> = ({ classes, title, month, year, description }) => {
    return (
        <div className={classes}>
            <div className='relative border-l border-gray-200 pl-12'>
                <img src={IconDotted} alt='icon' className='w-8 mx-auto mt-1 absolute z-10 transform -left-4 hover:scale-110 duration-300 cursor-pointer' />

                <div className='lg:max-w-350px w-full relative mr-auto'>
                    <img src={DotSmallPattern} alt='dot small pattern' className='absolute -top-4 -left-4' />

                    <div className='relative z-10 p-5 rounded-lg bg-white shadow-primary border border-gray-100'>
                        <span className='text-sm text-blue-500 block'>{month} - {year}</span>
                        <h5 className='mb-2 text-lg'>{title}</h5>

                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface Props extends IBox {
    position?: string;
}

const BoxHistory: React.FC<Props> = ({ position, classes, title, month, year, description }) => {
    return (
        <>
            {position === 'left' && <BoxLeft
                classes={classes}
                title={title}
                month={month}
                year={year}
                description={description}
            />}

            {position === 'right' && <BoxRight
                classes={classes}
                title={title}
                month={month}
                year={year}
                description={description}
            />}
        </>
    )
}

export default BoxHistory
