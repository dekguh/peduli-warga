import React from 'react'

interface Props {
    children?: JSX.Element
}

const IconBoxSmall: React.FC<Props> = ({ children }) => {
    return (
        <div className='inline-block bg-blue-500 pt-2 pb-2 pr-2 pl-2 rounded-sm'>
            <i>
                {children}
            </i>
        </div>
    )
}

export default IconBoxSmall
