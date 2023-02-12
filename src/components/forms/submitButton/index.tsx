import './style.sass';
import React from 'react';

interface propType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string
};

export default function (props: propType): React.ReactElement<HTMLButtonElement> {
    return <button className='submit-btn' {...props}>{props?.label}</button>
};
