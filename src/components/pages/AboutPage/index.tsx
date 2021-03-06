import React from 'react'
import { Helmet } from 'react-helmet'
import About from '../../organisms/About'
import HistoryPlatform from '../../organisms/About/HistoryPlatform'
import Team from '../../organisms/Team'
import { webInfo } from '../../utils/data'

const AboutPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>{webInfo.title} - tentang kami</title>
            </Helmet>

            <div className='mt-40'>
                <About isButtonRedirect={false} />
            </div>

            <div className='mt-20 lg:mt-40'>
                <HistoryPlatform />
            </div>

            <div className='mt-20'>
                <Team />
            </div>
        </>
    )
}

export default AboutPage
