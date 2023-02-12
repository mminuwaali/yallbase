import './style.sass';
import React from 'react';

// config
import { footerElements } from '../../config';

export default function (): React.ReactElement<'footer'> {
    return <footer>
        {footerElements.map(item => <div className='flex' key={item.title}>
            {item?.icon && <img src={item.icon} />}
            {item?.icon ? <span>{item.title}</span> : <b>{item.title}</b>}
        </div>)}
    </footer>;
};
