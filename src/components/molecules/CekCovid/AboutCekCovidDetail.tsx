import React from 'react'
import BoxAccordion from '../../atomics/box/BoxAccordion'
import TitleSection from '../../atomics/text/TitleSection'

const AboutCekCovidDetail: React.FC = () => {
    return (
        <div>
            <TitleSection
                title='Pahami Tentang Cek Covid'
                subtitle='Cek covid'
                classes='mb-5'
            />

            <div>
                <p className='mb-5'>
                    Untuk anda yang masih mengenai metode tes covid, mungkin jawaban dibawah bisa membantu anda dalam memahami metode-metodenya.
                </p>

                <BoxAccordion
                    classes='mb-5'
                    title='Apa itu swab antigen?'
                    description='Swab antigen atau dikenal dengan rapid antigen bekerja dengan cara mendeteksi protein tertentu dari virus yang memunculkan respons kekebalan tubuh.'
                />

                <BoxAccordion
                    classes='mb-5'
                    title='Apa itu PCR?'
                    description='PCR adalah singkatan dari polymerase chain reaction, PCR merupakan metode pemeriksaan virus SARS Co-2 dengan mendeteksi DNA virus.'
                />
            </div>
        </div>
    )
}

export default AboutCekCovidDetail
