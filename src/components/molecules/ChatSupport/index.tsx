import React from 'react'
import { TiMessages } from 'react-icons/ti'

interface Props {
    email: string;
}

const ChatSupport: React.FC<Props> = ({ email }) => {
    return (
        <div className='flex flex-row flex-nowrap items-center'>
            <div className='flex-grow-0 flex-shrink pr-3'>
                <i className='text-blue-500 text-5xl'>
                    <TiMessages />
                </i>
            </div>

            <div className='flex-grow-0 flex-shrink'>
                <h6 className='mb-0'>Have a question?</h6>
                <span>message to {email}</span>
            </div>
        </div>
    )
}

export default ChatSupport
