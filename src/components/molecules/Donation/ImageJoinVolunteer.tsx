import React from 'react'
import PhotoJoinVolunteer from '../../../images/join-volunteer.png'

const ImageJoinVolunteer: React.FC = () => {
    return (
        <div>
            <img
                className='w-full max-w-550px mx-auto'
                src={PhotoJoinVolunteer}
                alt="join volunteer"
            />
        </div>
    )
}

export default ImageJoinVolunteer
