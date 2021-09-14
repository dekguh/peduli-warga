import React from 'react'
import ChatContainer from '../../molecules/Contact/ChatContainer'
import ListQuickLink from '../../molecules/Footer/ListQuickLink'

const Footer: React.FC = () => {
    return (
    <>
        <ChatContainer />

        <div className='container mx-auto'>
            <div className='border-t border-gray-200 py-5'>
                <div className='flex flex-col lg:flex-row flex-nowrap items-center'>
                    <div className='flex-grow flex-shrink lg:pr-5 mb-3 lg:mb-0 px-3'>
                        <ListQuickLink />
                    </div>

                    <div className='flex-grow-0 flex-shrink px-3'>
                        <span className='block text-center lg:text-right'>Copyright © 2021 – PeduliWarga. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer
