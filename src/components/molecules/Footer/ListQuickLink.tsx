import React from 'react'
import { dataQuickLink } from '../../utils/data'

const ListQuickLink: React.FC = () => {
    return (
        <ul className='flex flex-row flex-nowrap last:mr-0'>
            {dataQuickLink && dataQuickLink.map((data, i) => (
                <li key={i} className='flex-grow-0 flex-shrink mr-4'>
                    <a className='duration-300 hover:text-blue-500' href={data.url}>
                        {data.text}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default ListQuickLink
