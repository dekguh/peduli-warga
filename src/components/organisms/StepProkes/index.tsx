import React from 'react'
import TitleSection from '../../atomics/text/TitleSection'
import ContentDetail from '../../molecules/StepProkes/ContentDetail'
import StepLine from '../../molecules/StepProkes/StepLine'

const StepProkes = () => {
    return (
        <div className='container mx-auto'>
            <TitleSection
                subtitle='Ikuti 3 Tahap'
                title='Protokol Kesehatan'
                classes='text-center mb-6'
            />

            <div>
                <StepLine />
                <ContentDetail />
            </div>
        </div>
    )
}

export default StepProkes
