import './style.sass';
import React from 'react';

// components
import * as forms from '../forms';

export default function (): React.ReactElement<'section'> {
    return <section id='consult'>
        <div className="aside">
            <h2>priority access</h2>
            <p>
                Get ready to revolutionize the way you interact with your customers
                and drive sales with Loyalbaze. Skip the waitlist and get exclusive
                priority access to LoyalBaze. Limited slots available. Please tell
                us a bit about your business and needs and of our consultants will
                be in touch Immediately!

            </p>
        </div>
        <div className="main">
            <forms.consultation />
        </div>
    </section>;
};