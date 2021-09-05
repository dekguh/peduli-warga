import React from 'react'

interface Props {
    icon: JSX.Element;
    text: string;
    classes?: string;
    textWhite?: boolean;
}

const TextIcon: React.FC<Props> = ({ icon, text, classes, textWhite }) => {
    return (
        <div className={classes ? `flex flex-row flex-nowrap items-center ${classes}` : 'flex flex-row flex-nowrap items-center'}>
            <div className='flex-grow-0 flex-shrink pr-2'>
                <i className='text-blue-500'>
                    {icon}
                </i>
            </div>

            <div className='flex-grow-1 flex-shrink'>
                <span className={textWhite ? 'text-white' : 'text-gray-600'}>{text}</span>
            </div>
        </div>
    )
}

export default TextIcon
