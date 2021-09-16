import React from 'react'
import TitleSection from '../../atomics/text/TitleSection'
import ContentDetail from '../../molecules/Testimonial/ContentDetail'

const Testimonial: React.FC = () => {
    return (
        <div className='container mx-auto px-4'>
            <TitleSection
                title='Apa Yang Mereka Katakan?'
                subtitle='Testimonial pengguna'
                classes='text-center mb-9'
            />

            <div>
                <ContentDetail />
            </div>
        </div>
    )
}

export default Testimonial
