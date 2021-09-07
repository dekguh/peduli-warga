import React from 'react'
import About from '../../organisms/About'
import Donation from '../../organisms/Donation'
import HomeHero from '../../organisms/HomeHero'
import MenuNav from '../../organisms/MenuNav'
import StepProkes from '../../organisms/StepProkes'

const HomePage: React.FC = () => {
    return (
        <>
            <MenuNav />
            <HomeHero />
            <About />
            <StepProkes />
            <Donation />
        </>
    )
}

export default HomePage
