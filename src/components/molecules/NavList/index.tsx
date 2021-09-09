import React, { useState, useEffect } from 'react'
import NavItem from '../../atomics/NavList/NavItem'
import { dataMenuNav } from '../../utils/data'
import NavLogo from '../../../images/logo-dark.png'
import { useLocation } from 'react-router'

interface Props {
    openStatus: boolean;
    handleOpenClick: (status: boolean) => void
}

const NavList: React.FC<Props> = ({ openStatus, handleOpenClick }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const RouteLocation = useLocation()

    useEffect(() => {
        setIsOpen(openStatus)
    }, [openStatus])

    return (
        <div className={`fixed top-0 w-80 lg:w-auto bg-white min-h-full lg:h-auto z-50 shadow lg:shadow-none lg:top-unset lg:right-unset lg:relative lg:bg-transparent duration-1000 lg:duration-0 ${isOpen ? 'right-0' : '-right-80'}`}>
            <div className='block lg:hidden pt-6 px-4 pb-4 text-center border-b border-gray-200'>
                <img
                    className='w-24 mx-auto mb-1'
                    src={NavLogo}
                    alt='logo'
                />
                <span>dari rakyat untuk rakyat</span>
            </div>

            <ul className='flex flex-col lg:flex-row flex-nowrap p-6 lg:p-0 last:pr-0 lg:pl-8 border-b lg:border-b-0 border-gray-200'>
                {dataMenuNav && dataMenuNav.map((data, i) => (
                    <li className='pb-2 lg:pb-0 lg:pr-6' key={i}>
                        <NavItem
                            text={data.text}
                            url={data.url}
                            active={RouteLocation.pathname === data.url}
                        />
                    </li>
                ))}
            </ul>

            <div className='block lg:hidden p-6'>
                <h6 className='mb-2'>Kantor Resmi</h6>
                <iframe
                    className='border-0 w-full h-44 mb-8'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.62322693972!2d115.18799998291418!3d-8.79491973752343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244c6d5ad1f8f%3A0x90084d463fef4045!2sSouth%20Kuta%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1630814419045!5m2!1sen!2sid">
                </iframe>

                <div className='text-center'>
                    <button
                        onClick={e => {
                            setIsOpen(!isOpen)
                            handleOpenClick(false)
                        }}
                        className='border border-blue-500 rounded-full py-1 px-7 text-blue-500 hover:bg-blue-500 hover:text-white duration-300'
                    >
                        tutup
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavList