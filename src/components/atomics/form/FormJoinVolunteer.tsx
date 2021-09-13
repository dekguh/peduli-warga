import React, { useState } from 'react'
import FormSuccess from './FormSuccess'

const FormJoinVolunteer: React.FC = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    const submitHandle = (e: React.MouseEvent) : void => {
        setIsSuccess(true)
    }
    return (
        <div>
            <p className='mb-5'>Silahkan isi form dibawah ini secara lengkap dan juga upload CV anda. 
                jika anda lolos kriteria, kami akan segera menghubungi anda.</p>
            {!isSuccess && <form>
                <div className='flex flex-row flex-nowrap mb-4'>
                    <div className='flex-grow-0 flex-shrink w-6/12 pr-2'>
                        <label className='label'>Nama</label>
                        <input type="text" className='input-primary' placeholder='nama lengkap' required={true}/>
                    </div>

                    <div className='flex-grow-0 flex-shrink w-6/12 pl-2'>
                        <label className='label'>Posisi</label>
                        <select className='input-primary' required={true}>
                            <option>pilih posisi</option>
                            <option>relawan lapangan</option>
                            <option>it support</option>
                            <option>web designer</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-row flex-nowrap mb-4'>
                    <div className='flex-grow-0 flex-shrink w-6/12 pr-2'>
                        <label className='label'>E-mail</label>
                        <input type="email" className='input-primary' placeholder='email anda' required={true}/>
                    </div>

                    <div className='flex-grow-0 flex-shrink w-6/12 pl-2'>
                        <label className='label'>No Whatsapp</label>
                        <input type="number" className='input-primary' placeholder='0812xxxxxx' required={true}/>
                    </div>
                </div>

                <div className='flex flex-row flex-nowrap mb-4'>
                    <div className='flex-grow-0 flex-shrink w-full'>
                        <label className='label'>CV anda</label>
                        <input type="file" className='input-primary' placeholder='email anda' />
                    </div>
                </div>

                <div className='flex flex-row flex-nowrap mb-4'>
                    <button onClick={submitHandle} className='button-primary'>Daftar Sekarang</button>
                </div>
            </form>}

            {isSuccess && <FormSuccess />}
        </div>
    )
}

export default FormJoinVolunteer
