import React from 'react'
import TitleSection from '../../atomics/text/TitleSection'
import StepLine from '../../molecules/StepProkes/StepLine'
import VaksinasiStepDetail from '../../molecules/Vaksinasi/VaksinasiStepDetail'

const StepVaksinasi: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <TitleSection
                subtitle='Tahap Vaksinasi'
                title='Daftar Vaksinasi'
                classes='text-center mb-6'
            />

            <div>
                <StepLine />
                <VaksinasiStepDetail />
            </div>
        </div>
    )
}

export default StepVaksinasi
