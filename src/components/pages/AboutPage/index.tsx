import React from 'react'
import { Helmet } from 'react-helmet'
import About from '../../organisms/About'
import HistoryPlatform from '../../organisms/About/HistoryPlatform'
import { webInfo } from '../../utils/data'

const AboutPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>{webInfo.title} - tentang kami</title>
            </Helmet>

            <div className='mt-40'>
                <About />
            </div>

            <div className='mt-20 lg:mt-40'>
                <HistoryPlatform />
            </div>
        </>
    )
}

export default AboutPage
