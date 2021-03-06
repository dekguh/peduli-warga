import React, { useState } from 'react'
import { FiHeadphones } from 'react-icons/fi'
import BoxChatForm from '../../atomics/box/BoxChatForm'
import BoxEnterChat from '../../atomics/box/BoxEnterChat'

const ChatContainer: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isChatBox, setIsChatBox] = useState<boolean>(false)
    return (
        <div className='fixed bottom-5 right-5 z-50 overflow-hidden inline-block'>
            <div className={`${isOpen ? 'fixed right-5 bottom-20 opacity-100' : 'fixed -right-96 bottom-20 opacity-0'} duration-1000`}>
                {isChatBox
                ? (<BoxChatForm
                    nameSupport='Amanda Tan'
                    isOnline={true}
                    clickMinimize={e => setIsOpen(!isOpen)}
                />)
                : (<BoxEnterChat
                    nameSupport='Amanda Tan'
                    isOnline={true}
                    clickMinimize={e => setIsOpen(!isOpen)}
                    clickSend={e => setIsChatBox(true)}
                />)}
            </div>

            <div className='mt-5 text-right'>
                <button className='button-primary relative rounded-full' onClick={e => setIsOpen(!isOpen)}>
                    <i>
                        <FiHeadphones />
                    </i>
                </button>
            </div>
        </div>
    )
}

export default ChatContainer
