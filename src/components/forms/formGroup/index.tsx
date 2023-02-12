import './style.sass';
import React from 'react';
interface propTypes2 extends React.HTMLAttributes<HTMLTextAreaElement> { };

interface propTypes extends React.HTMLAttributes<HTMLInputElement> {
    name?: string;
    icon?: string;
    options?: { value: string, name: string }[]
    type?: React.HTMLInputTypeAttribute | 'textarea';
};


export default function (props: propTypes): React.ReactElement<HTMLDivElement> {
    return <div className="form-group">
        {props?.icon && <img src={props.icon} alt='' />}
        {
            props?.type == 'textarea' ?
                // @ts-ignore
                <textarea name={props?.name} onChange={props.onChange} placeholder={props.placeholder} required /> :
                props?.type == 'select' ?
                    <select name={props?.name} placeholder={props.placeholder}>
                        {props.options?.map((opt, id) => <option key={id} value={opt.value}>{opt.name}</option>)}
                    </select> :
                    <input {...props} required />
        }
    </div>
};
