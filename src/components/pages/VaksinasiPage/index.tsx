import React from 'react'
import { Helmet } from 'react-helmet'
import StepVaksinasi from '../../organisms/Vaksinasi/StepVaksinasi'
import VaksinasiContentPage from '../../organisms/Vaksinasi/VaksinasiContentPage'
import { webInfo } from '../../utils/data'

const VaksinasiPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>{webInfo.title} - Vaksinasi</title>
            </Helmet>

            <div className='mt-20'>
                <StepVaksinasi />
            </div>

            <div className='mt-20'>
                <VaksinasiContentPage />
            </div>
        </>
    )
}

export default VaksinasiPage
