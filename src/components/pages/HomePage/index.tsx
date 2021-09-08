import React from 'react'
import About from '../../organisms/About'
import Ambulance from '../../organisms/Ambulance'
import Donation from '../../organisms/Donation'
import HomeHero from '../../organisms/HomeHero'
import MenuNav from '../../organisms/MenuNav'
import StepProkes from '../../organisms/StepProkes'

const HomePage: React.FC = () => {
    return (
        <>
            <MenuNav />
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
