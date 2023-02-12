import './style.sass';
import React from 'react';

// components
import * as forms from '../forms';

export default function (): React.ReactElement<'section'> {
    return <section id='banner'>
        <h2>
            turn your best customers into
            <span> loyal fans</span>
        </h2>
        <p>
            Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.
        </p>
        <forms.subscribe />
    </section>;
};