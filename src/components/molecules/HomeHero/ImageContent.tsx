import React from 'react'
import HeroImg from '../../../images/home-hero.png'
import CustomerSay from '../../atomics/HomeHero/CustomerSay'
import CustomerPhoto from '../../../images/circle-shape-portrait-of-young-female-lawyer-at-her-workplace-BSULBPN.png'
import CustomerPhoto2 from '../../../images/circle-shape-attractive-woman-with-a-bouquet-of-red-tulips-the-BZ8SG5G.png'

const ImageContent: React.FC = () => {
    return (
        <div className='relative'>
            <img
                src={HeroImg}
                alt="home hero image"
                className='w-full max-w-550px mx-auto'
            />

            <div className='absolute top-28 sm:top-44 xl:-left-0 animate-slowbounce'>
                <CustomerSay
                    name='Alexia Sandra Putri'
                    totalRated={4}
                    src={CustomerPhoto}
                />
            </div>

            <div className='absolute bottom-3 sm:bottom-24 right-0 xl:-right-0 animate-slowbounce'>
                <CustomerSay
                    name='Clara Meiranda'
                    totalRated={5}
                    src={CustomerPhoto2}
                />
            </div>
        </div>
    )
}

export default ImageContent
