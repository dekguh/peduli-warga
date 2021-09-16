import React from 'react'
import { Link } from 'react-router-dom'
import { dataQuickLink } from '../../utils/data'

const ListQuickLink: React.FC = () => {
    return (
        <ul className='flex flex-row flex-nowrap last:mr-0'>
            {dataQuickLink && dataQuickLink.map((data, i) => (
                <li key={i} className='flex-grow-0 flex-shrink mr-4'>
                    <span className='duration-300 hover:text-blue-500'>
                        <Link to={data.url}>
                            {data.text}
                        </Link>
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default ListQuickLink
