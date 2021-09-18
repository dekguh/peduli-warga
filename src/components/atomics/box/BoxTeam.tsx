import React from 'react'
import {
    RiFacebookFill,
    RiTwitterFill,
    RiLinkedinFill
} from 'react-icons/ri'
import { SiInstagram } from 'react-icons/si'

interface Props {
    photo: string;
    name: string;
    position: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
}

const BoxTeam: React.FC<Props> = ({ photo, name, position, facebook, twitter, instagram, linkedin }) => {
    return (
        <div className='relative'>
            <div className='relative'>
                <img src={photo} alt="team" className='w-full mb-3 rounded-md' />

                <ul className='bg-blue-500 py-3 px-3 rounded flex flex-row flex-nowrap w-36 absolute -top-3 left-2/4 transform -translate-x-2/4'>
                    <li className='flex-grow-0 flex-shrink w-3/12'>
                        <a href={facebook} className='text-white'>
                            <i><RiFacebookFill /></i>
                        </a>
                    </li>

                    <li className='flex-grow-0 flex-shrink w-3/12'>
                        <a href={instagram} className='text-white'>
                            <i><SiInstagram /></i>
                        </a>
                    </li>

                    <li className='flex-grow-0 flex-shrink w-3/12'>
                        <a href={twitter} className='text-white'>
                            <i><RiTwitterFill /></i>
                        </a>
                    </li>

                    <li className='flex-grow-0 flex-shrink w-3/12'>
                        <a href={linkedin} className='text-white'>
                            <i><RiLinkedinFill /></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='text-center'>
                <h5 className='text-lg'>{name}</h5>
                <span>{position}</span>
            </div>
        </div>
    )
}

export default BoxTeam
