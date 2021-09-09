import React from 'react'
import { Helmet } from 'react-helmet'
import Contact from '../../organisms/Contact'
import { webInfo } from '../../utils/data'

const ContactPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>{webInfo.title} - Kontak Kami</title>
            </Helmet>

            <Contact />
        </>
    )
}

export default ContactPage
