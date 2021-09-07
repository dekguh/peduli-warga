import React from 'react'
import BgDotPattern from '../../../images/dot-large-pattern.png'
import BoxFounder from '../../atomics/box/BoxFounder'
import PhotoFounder from '../../../images/circle-shape-woman-working-in-home-office-6TFKRX9.png'

const ContentImage: React.FC = () => {
    return (
        <div className='relative'>
            <img
                className='absolute -bottom-12 -left-7 animate-slow-x-bounce w-full max-w-350px'
                src={BgDotPattern}
                alt='bg pattern'
            />
            <div className='pr-28 lg:pr-56 xl:pr-56 relative z-10'>
                <div className='bg-no-repeat bg-cover bg-center bg-about-image-1 w-full h-96 rounded-md'></div>
            </div>
            <div className='pl-28 lg:pl-56 xl:pl-60 -mt-72 relative z-10'>
                <div className='bg-no-repeat bg-cover bg-center bg-about-image-2 w-full h-96 rounded-md'></div>
            </div>

            <div className='absolute -right-5 bottom-14 z-10 animate-slowbounce'>
                <BoxFounder
                    src={PhotoFounder}
                    name='Frilia Wulansari'
                    position='Founder'
                />
            </div>
        </div>
    )
}

export default ContentImage
