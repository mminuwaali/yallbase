import './style.sass';
import React from 'react';
import { consultForm, success } from '../../../config';

// components
import FormGroup from '../formGroup';
import * as cards from '../../cards';
import SubmitButton from '../submitButton';

export default function (): React.ReactElement<HTMLFormElement> {
    // states
    const [pop, setPop] = React.useState<boolean>(false);
    const [data, setData] = React.useState<{ name: string, email: string }>({ name: '', email: '' });

    // methods
    const closePop = () => setPop(() => false);
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => { e.preventDefault(); setPop(() => true) };
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ currentTarget: t }) => setData(prev => ({ ...prev, [t.name]: t.value }));

    return <form action="" id="consultation" onSubmit={handleSubmit}>
        <h3>Book a Consultation with us</h3>
        {pop && <cards.modal icon={success} onclose={closePop} title="congratulations" message="Great move! You're one step closer to getting your hands on the product. Please check your mail for more information." />}
        {consultForm.map((ele, id) => <FormGroup {...ele} key={id} onChange={handleChange} />)}
        <SubmitButton label='Send request' type='submit' />
    </form>;
};