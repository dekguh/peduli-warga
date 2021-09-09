import React from 'react'

interface Props {
    text: string;
    url: string;
    active: boolean;
}

const NavItem: React.FC<Props> = ({ text, url, active }) => {
    return (
        <div>
            <a href={url} className={active ? 'text-blue-500' : `text-gray-600 hover:text-blue-500`}>
                {text}
            </a>
        </div>
    )
}

export default NavItem
