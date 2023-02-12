import './style.sass';
import React from 'react';
import { subscribeForm, success } from '../../../config';

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

    return <form action="" id="subscribe" onSubmit={handleSubmit}>
        {pop && <cards.modal icon={success} onclose={closePop} title="congratulations" message="Great move! You're one step closer to getting your hands on the product. Please check your mail for more information." />}
        {subscribeForm.map((ele, id) => <FormGroup {...ele} onChange={handleChange} key={ele.name} />)}
        <SubmitButton label='Get early access' type='submit' />
    </form>;
};