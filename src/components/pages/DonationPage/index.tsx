import React from 'react'
import { Helmet } from 'react-helmet'
import DonationContentPage from '../../organisms/Donation/DonationContentPage'
import JoinVolunteer from '../../organisms/Donation/JoinVolunteer'
import { webInfo } from '../../utils/data'

const DonationPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>{webInfo.title} - temukan lokasi donasi</title>
            </Helmet>

            <div className='mt-20'>
                <JoinVolunteer />
            </div>

            <div className='mt-20'>
                <DonationContentPage />
            </div>
        </>
    )
}

export default DonationPage
