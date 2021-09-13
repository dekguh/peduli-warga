import React from 'react'
import FormJoinVolunteer from '../../atomics/form/FormJoinVolunteer'
import TitleSection from '../../atomics/text/TitleSection'

const DetailJoinVolunteer: React.FC = () => {
    return (
        <div>
            <TitleSection
                title='Bergabung Menjadi Relawan'
                subtitle='Ayo menjadi bagian dari kami'
                classes='mb-5'
            />

            <div>
                <FormJoinVolunteer />
            </div>
        </div>
    )
}

export default DetailJoinVolunteer
