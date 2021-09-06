import React from 'react'

interface Props {
    subtitle: string;
    title: string;
    classes?: string;
}

const TitleSection: React.FC<Props> = ({ subtitle, title, classes }) => {
    return (
        <div className={classes}>
            <span className='mb-1 block text-blue-500'>{subtitle}</span>
            <h2 className='text-3xl md:text-4xl'>{title}</h2>
        </div>
    )
}

export default TitleSection
