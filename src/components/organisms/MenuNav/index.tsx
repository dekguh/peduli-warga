import React, { useState } from 'react'
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'
import TextIcon from '../../atomics/text/TextIcon'
import IconLink from '../../molecules/IconLink'
import { BsEnvelope, BsClock, BsCalendar } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import ChatSupport from '../../molecules/ChatSupport'
import NavList from '../../molecules/NavList'
import NavLogo from '../../../images/logo-dark.png'
import { VscThreeBars } from 'react-icons/vsc'
import { webInfo } from '../../utils/data'

type THandleClickOpen = (status: boolean) => void

const MenuNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClickOpen: THandleClickOpen = (status) => {
        setIsOpen(status)
    }

    return (
        <div className='border-b border-gray-200'>
            <div className='bg-navy pt-3 pb-3 text-white items-center'>
                <div className='container mx-auto'>
                    <div className='flex flex-row flex-wrap lg:flex-nowrap items-center'>
                        <div className='flex-grow md:flex-grow-0 flex-shrink lg:w-5/12 p-2'>
                            <ul className='flex flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-start'>
                                <li className='flex-grow-0 flex-shrink pr-5'>
                                    <TextIcon
                                        text={webInfo.openDay}
                                        icon={<BsCalendar />}
                                        textWhite={true}
                                    />
                                </li>

                                <li className='flex-grow-0 flex-shrink'>
                                    <TextIcon
                                        text={webInfo.openTime}
                                        icon={<BsClock />}
                                        textWhite={true}
                                    />
                                </li>
                            </ul>
                        </div>

                        <div className='flex-grow md:flex-grow-0 flex-shrink lg:w-5/12 p-2'>
                            <ul className='flex flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-start'>
                                <li className='flex-grow-0 flex-shrink pr-5'>
                                    <TextIcon
                                        text={webInfo.email}
                                        icon={<BsEnvelope />}
                                        textWhite={true}
                                    />
                                </li>

                                <li className='flex-grow-0 flex-shrink'>
                                    <TextIcon
                                        text={webInfo.phone}
                                        icon={<FiPhoneCall />}
                                        textWhite={true}
                                    />
                                </li>
                            </ul>
                        </div>

                        <div className='flex-grow lg:flex-grow-0 flex-shrink-1 w-full lg:w-2/12 p-2'>
                            <div className='flex justify-center'>
                                <IconLink url={webInfo.facebook} classes='pr-2'>
                                    <RiFacebookFill />
                                </IconLink>

                                <IconLink url={webInfo.twitter} classes='pr-2'>
                                    <RiTwitterFill />
                                </IconLink>

                                <IconLink url={webInfo.instagram} classes='pr-2'>
                                    <RiInstagramFill />
                                </IconLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-4'>
                <div className='container mx-auto'>
                    <div className='flex flex-row flex-nowrap items-center'>
                        <div className='flex-grow-0 flex-shrink p-3'>
                            <img
                                className='w-24'
                                src={NavLogo}
                                alt='logo'
                            />
                        </div>

                        <div className='flex-grow flex-shrink p-3'>
                            <div className='text-right block lg:hidden'>
                                <button
                                    onClick={e => handleClickOpen(true)}
                                    className='border border-blue-500 py-3 px-4 rounded-sm text-blue-500 hover:bg-blue-500 hover:text-white duration-300'
                                >
                                    <i>
                                        <VscThreeBars />
                                    </i>
                                </button>
                            </div>
                            <NavList openStatus={isOpen} handleOpenClick={handleClickOpen} />
                        </div>

                        <div className='flex-grow-0 flex-shrink p-3 hidden md:block'>
                            <ChatSupport email={webInfo.email} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuNav
