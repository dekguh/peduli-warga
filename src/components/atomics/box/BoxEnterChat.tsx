import React from 'react'
import { FaTimes } from 'react-icons/fa'

interface Props {
    nameSupport: string;
    isOnline: boolean;
    clickMinimize: React.MouseEventHandler;
    clickSend: React.MouseEventHandler;
}

const BoxEnterChat: React.FC<Props> = ({ nameSupport, isOnline, clickMinimize, clickSend }) => {
    return (
        <div className='shadow-primary bg-white rounded-md w-310px border border-gray-100 relative'>
            <div className='bg-blue-500 py-3 px-5 rounded-t-md'>
                <div className='flex flex-row flex-nowrap items-center'>
                    <div className='flex-grow flex-shrink'>
                        <h6 className='mb-0 text-white font-medium'>{nameSupport}</h6>
                        {isOnline
                            ? (<span className='text-green-400'>online</span>)
                            : (<span className='text-red-400'>offline</span>)
                        }
                    </div>

                    <div className='flex-grow-0 flex-shrink'>
                        <button onClick={clickMinimize} className='p-0 border border-white py-1 px-1 rounded-sm text-white'>
                            <i>
                                <FaTimes />
                            </i>
                        </button>
                    </div>
                </div>
            </div>

            <div className='pt-5 pb-5 px-5'>
                <div className='mb-3'>
                    <label className='label'>Nama</label>
                    <input className='input-primary py-2 pl-5 pr-9 text-sm' placeholder='nama anda' />
                </div>

                <div className='mb-3'>
                    <label className='label'>e-mail</label>
                    <input type='email' className='input-primary py-2 pl-5 pr-9 text-sm' placeholder='email anda' />
                </div>

                <div className='mb-3'>
                    <label className='label'>pesan</label>
                    <textarea className='input-primary py-2 pl-5 pr-9 text-sm' placeholder='pesan' rows={4}></textarea>
                </div>

                <div className='mb-3'>
                    <button onClick={clickSend} className='button-primary py-2 px-5 text-sm'>kirim</button>
                </div>
            </div>
        </div>
    )
}

export default BoxEnterChat
