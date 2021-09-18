import React from 'react'
import PhotoTeam1 from '../../../images/team/pexels-mart-production-7480537.png'
import PhotoTeam2 from '../../../images/team/pexels-olya-kobruseva-4621787.png'
import PhotoTeam3 from '../../../images/team/pexels-sound-on-3761073.png'
import PhotoTeam4 from '../../../images/team/pexels-swanand-1862836.png'
import BoxTeam from '../../atomics/box/BoxTeam'

const ContentDetail: React.FC = () => {
    return (
        <div className='flex flex-row flex-wrap'>
            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 px-3 mb-7 lg:mb-0'>
                <BoxTeam
                    photo={PhotoTeam1}
                    name='Frilia Wulansari'
                    position='CEO & Founder'
                    facebook='#'
                    twitter='#'
                    instagram='#'
                    linkedin='#'
                />
            </div>

            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 px-3 mb-7 lg:mb-0'>
                <BoxTeam
                    photo={PhotoTeam2}
                    name='Arinda Sita'
                    position='Co-Founder'
                    facebook='#'
                    twitter='#'
                    instagram='#'
                    linkedin='#'
                />
            </div>

            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 px-3 mb-7 lg:mb-0'>
                <BoxTeam
                    photo={PhotoTeam3}
                    name='Mariana Lee'
                    position='Tech Lead'
                    facebook='#'
                    twitter='#'
                    instagram='#'
                    linkedin='#'
                />
            </div>

            <div className='flex-grow-0 flex-shrink w-full md:w-6/12 lg:w-3/12 px-3 mb-7 lg:mb-0'>
                <BoxTeam
                    photo={PhotoTeam4}
                    name='Agatha Dita'
                    position='Marketing Lead'
                    facebook='#'
                    twitter='#'
                    instagram='#'
                    linkedin='#'
                />
            </div>
        </div>
    )
}

export default ContentDetail
