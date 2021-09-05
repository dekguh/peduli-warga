import React from 'react'
import DetailContent from '../../molecules/HomeHero/DetailContent'
import ImageContent from '../../molecules/HomeHero/ImageContent'

const HomeHero: React.FC = () => {
    return (
        <div className='py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row flex-nowrap items-center'>
                    <div className='flex-grow xl:flex-grow-0 flex-shrink w-full xl:w-6/12 p-3'>
                        <DetailContent />
                    </div>

                    <div className='flex-grow xl:flex-grow-0 flex-shrink w-full xl:w-6/12 p-3'>
                        <ImageContent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero
