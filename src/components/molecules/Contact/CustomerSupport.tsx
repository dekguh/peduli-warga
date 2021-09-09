import React from 'react'
import ImageCustomerSupport from '../../../images/customer-support.png'
import BoxCustomerLive from '../../atomics/box/BoxCustomerLive'
import TitleSection from '../../atomics/text/TitleSection'
import ImageSupport1 from '../../../images/customer-support-team-1.png'
import ImageSupport2 from '../../../images/customer-support-team-2.png'
import ImageSupport3 from '../../../images/customer-support-team-3.png'

const CustomerSupport: React.FC = () => {
    return (
        <div className='container mx-auto px-3 relative w-full'>
            <TitleSection
                title='Butuh Bantuan Segera?'
                subtitle='Masalah darurat'
                classes='mb-10 text-center'
            />

            <div className='flex flex-row flex-nowrap justify-center relative'>
                <div className='flex-grow-0 flex-shrink relative'>
                    <img
                        src={ImageCustomerSupport}
                        alt="support customer"
                        className='w-full max-w-550px mx-auto'
                    />

                    <div className='absolute -left-1 top-0'>
                        <BoxCustomerLive
                            photo={ImageSupport1}
                            name='Dena Jayani'
                            isOnline={false}
                        />
                    </div>

                    <div className='absolute -left-1 bottom-0'>
                        <BoxCustomerLive
                            photo={ImageSupport2}
                            name='Alinea Nikita'
                            isOnline={true}
                        />
                    </div>

                    <div className='absolute right-0 md:-right-12 top-2/4 transform -translate-y-2/4'>
                        <BoxCustomerLive
                            photo={ImageSupport3}
                            name='Amanda Tan'
                            isOnline={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSupport
