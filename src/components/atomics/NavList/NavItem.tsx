import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    text: string;
    url: string;
    active: boolean;
}

const NavItem: React.FC<Props> = ({ text, url, active }) => {
    return (
        <div className={active ? 'text-blue-500' : `text-gray-600 hover:text-blue-500`}>
            <Link to={url}>{text}</Link>
        </div>
    )
}

export default NavItem
