import React from 'react'
import { FiChevronsRight, FiNavigation } from 'react-icons/fi'

interface PropsItem {
    name: string;
    typeUser: string;
    message: string;
}

const ItemMessage: React.FC<PropsItem> = ({ name, typeUser, message }) => {
    return (
        <div className={typeUser == 'support' ? 'text-left' : 'text-right'}>
            <h6 className='font-normal text-sm mb-1'>{name}</h6>
            <p className={`py-2 px-3 ${typeUser == 'support' ? 'bg-gray-100' : 'bg-blue-100'} text-sm rounded-md inline-block`}>
                {message}
            </p>
        </div>
    )
}

interface BoxChatProps {
    nameSupport: string;
    isOnline: boolean;
    clickMinimize: React.MouseEventHandler;
}

const BoxChatForm: React.FC<BoxChatProps> = ({ nameSupport, isOnline, clickMinimize }) => {
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
                                <FiChevronsRight />
                            </i>
                        </button>
                    </div>
                </div>
            </div>

            <div className='pt-5 pb-16'>
                <div>
                    <ul className='last:mb-0 overflow-y-auto h-72 px-5'>
                        <li className='mb-2'>
                            <ItemMessage
                                name='Amanda Tan'
                                typeUser='support'
                                message='hallo, ada bisa dibantu?'
                            />
                        </li>

                        <li className='mb-2'>
                            <ItemMessage
                                name='Pak Dek'
                                typeUser='customer'
                                message='saya sedikit bingung'
                            />
                        </li>

                        <li className='mb-2'>
                            <ItemMessage
                                name='Amanda Tan'
                                typeUser='support'
                                message='bingung kenapa pak?'
                            />
                        </li>

                        <li className='mb-2'>
                            <ItemMessage
                                name='Pak Dek'
                                typeUser='customer'
                                message='saya terlambat vaksinasi dosis ke 2'
                            />
                        </li>

                        <li className='mb-2'>
                            <ItemMessage
                                name='Amanda Tan'
                                typeUser='support'
                                message='bapak bisa ikut vaksinasi tahap 2 di tempat vaksinasi terdekat'
                            />
                        </li>

                        <li className='mb-2'>
                            <ItemMessage
                                name='Pak Dek'
                                typeUser='customer'
                                message='oh begitu ya, terima kasih informasinya'
                            />
                        </li>

                        <li className='mb-2'>
                            <ItemMessage
                                name='Amanda Tan'
                                typeUser='support'
                                message='sama-sama pak'
                            />
                        </li>
                    </ul>
                </div>

                <div className='absolute bottom-0 left-0 right-0 py-2 px-2'>
                    <div className='relative'>
                        <input className='input-primary py-2 pl-5 pr-9 text-sm' placeholder='ketik pesan...' />
                        <button className='p-0 text-blue-500 absolute top-2/4 right-3 transform -translate-y-2/4'>
                            <i>
                                <FiNavigation />
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxChatForm
