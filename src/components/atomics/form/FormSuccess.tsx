import React from 'react'
import ImageFormSuccess from '../../../images/form-success.png'

const FormSuccess: React.FC = () => {
    return (
        <div className='text-center'>
            <img src={ImageFormSuccess} alt='form success' className='w-32 mx-auto' />
            <h5 className='text-lg mt-4'>Terima Kasih</h5>
            <p>pendaftaran berhasil, kami akan segera mereview CV anda</p>
        </div>
    )
}

export default FormSuccess
