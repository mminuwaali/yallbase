import './style.sass';
import React from "react";
import { createPortal } from 'react-dom';

interface propTypes extends React.HTMLAttributes<any> {
    icon?: string;
    title: string;
    message: string;
    onclose: React.MouseEventHandler;
};


export default function (props: propTypes): React.ReactPortal {
    return createPortal(<div id="modal" onClick={props.onclose}>
        <img src={props.icon} alt="" />
        <h2>{props.title}</h2>
        <p>{props.message}</p>
    </div>, document.querySelector<HTMLDivElement>('#portal')!);
};
