import React from 'react'
import Donation from '../../organisms/Donation'
import HomeHero from '../../organisms/HomeHero'
import MenuNav from '../../organisms/MenuNav'
import StepProkes from '../../organisms/StepProkes'

const HomePage: React.FC = () => {
    return (
        <>
            <MenuNav />
            <HomeHero />
            <StepProkes />
            <Donation />
        </>
    )
}

export default HomePage
