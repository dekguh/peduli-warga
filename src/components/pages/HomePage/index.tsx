import React from 'react'
import About from '../../organisms/About'
import Ambulance from '../../organisms/Ambulance'
import Donation from '../../organisms/Donation'
import Footer from '../../organisms/Footer'
import HomeHero from '../../organisms/HomeHero'
import StepProkes from '../../organisms/StepProkes'
import { Helmet } from 'react-helmet'
import { webInfo } from '../../utils/data'

const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>{webInfo.title} - beranda</title>
            </Helmet>

            <HomeHero />
            <div className='bg-blue-100 py-20 mt-20'>
                <About />
            </div>

            <div className='mt-20'>
                <StepProkes />
            </div>

            <div className='mt-20'>
                <Ambulance />
            </div>

            <div className='mt-20'>
                <Donation />
            </div>
        </>
    )
}

export default HomePage
