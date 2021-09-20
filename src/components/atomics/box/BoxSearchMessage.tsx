import React from 'react'

interface Props {
    message: string;
    classes?: string;
    image?: string;
}

const BoxSearchMessage: React.FC<Props> = ({ classes, message, image }) => {
    return (
        <div className={classes}>
            {image && (
                <img src={image} alt='message' className='w-24 mx-auto mb-2' />
            )}
            <p className='text-center'>
                {message}
            </p>
        </div>
    )
}

export default BoxSearchMessage
