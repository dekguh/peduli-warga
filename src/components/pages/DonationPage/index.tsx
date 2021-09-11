import React from 'react'
import { Helmet } from 'react-helmet'
import DonationContentPage from '../../organisms/Donation/DonationContentPage'
import { webInfo } from '../../utils/data'

const DonationPage = () => {
    return (
        <>
            <Helmet>
                <title>{webInfo.title} - temukan lokasi donasi</title>
            </Helmet>

            <div className='mt-20'>
                <DonationContentPage />
            </div>
        </>
    )
}

export default DonationPage
