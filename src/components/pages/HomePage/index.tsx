import React from 'react'
import HomeHero from '../../organisms/HomeHero'
import MenuNav from '../../organisms/MenuNav'
import StepProkes from '../../organisms/StepProkes'

const HomePage: React.FC = () => {
    return (
        <>
            <MenuNav />
            <HomeHero />
            <StepProkes />
        </>
    )
}

export default HomePage
