import './style.sass';
import React from 'react';

// importing assets from config file
import { logo } from '../../config';

export default function (): React.ReactElement<'header'> {
    return <header>
        <img src={logo} alt="" className='logo' loading='lazy' />
        <button>get priority access</button>
    </header>;
};