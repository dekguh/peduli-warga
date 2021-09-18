import React from 'react'
import TitleSection from '../../atomics/text/TitleSection'
import ContentDetail from '../../molecules/Team/ContentDetail'

const Team: React.FC = () => {
    return (
        <div className='container mx-auto py-2'>
            <TitleSection
                title='Tim Kami'
                subtitle='Kenali tim terbaik kami'
                classes='mb-9 text-center'
            />

            <ContentDetail />
        </div>
    )
}

export default Team