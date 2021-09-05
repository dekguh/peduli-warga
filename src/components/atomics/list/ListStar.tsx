import React from 'react'
import { AiFillStar } from 'react-icons/ai'

interface Props {
    totalRated: number
}

const ListStar: React.FC<Props> = ({ totalRated }) => {
    return (
        <ul className='flex flex-flow flex-nowrap'>
            {[1, 2, 3, 4, 5].map((data, i) => (
                <li className='flex-grow-0 flex-shrink' key={i}>
                    <i className={data <= totalRated  ? 'text-yellow-500' : 'text-gray-400'}>
                        <AiFillStar />
                    </i>
                </li>
            ))}
        </ul>
    )
}

export default ListStar
