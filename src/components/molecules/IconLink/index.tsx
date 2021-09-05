import React from 'react'
import IconBoxSmall from '../../atomics/box/IconBoxSmall'

interface Props {
    children: JSX.Element;
    url: string;
    classes?: string;
}

const IconLink: React.FC<Props> = ({ children, url, classes }) => {
    return (
        <a href={url} className={classes}>
            <IconBoxSmall>
                {children}
            </IconBoxSmall>
        </a>
    )
}

export default IconLink
