import React from 'react'
import { Helmet } from 'react-helmet'
import CekCovidContentPage from '../../organisms/CekCovid/CekCovidContentPage'
import { webInfo } from '../../utils/data'

const CekCovidPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>{webInfo.title} - Cek Covid</title>
            </Helmet>

            <div className='mt-20'>
                <CekCovidContentPage />
            </div>
        </>
    )
}

export default CekCovidPage
