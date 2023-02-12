import React from 'react';
import user from './assets/icons/user.svg';
import home from './assets/icons/home.svg';
import email from './assets/icons/email.svg';
import phone from './assets/icons/phone.svg';
// this config file serve as an import junction for all asset files
export { default as logo } from './assets/icons/logo.svg';
export { default as user } from './assets/icons/user.svg';
export { default as email } from './assets/icons/email.svg';
export { default as banner } from './assets/images/banner.svg';
export { default as success } from './assets/icons/success.svg';
export { default as consult } from './assets/images/consult.svg';

export const subscribeForm: { name: string, type: React.HTMLInputTypeAttribute, placeholder: string, icon: string }[] = [
    { icon: user, name: 'name', placeholder: 'Tell us your name', type: 'text' },
    { icon: email, name: 'email', placeholder: 'Enter your email address', type: 'email' },
];


export const consultForm: { name: string, type: React.HTMLInputTypeAttribute, placeholder: string, options?: { name: string, value: string }[] }[] = [
    { name: 'name', placeholder: 'Enter your full name', type: 'text' },
    { name: 'email', placeholder: 'Enter your work email', type: 'email' },
    { name: 'number', placeholder: 'Mobile number', type: 'tel' },
    { name: 'company', placeholder: 'Company name', type: 'text' },
    { name: 'country', placeholder: 'Select country', type: 'select', options: [{ name: 'Select country', value: self.name }, { name: 'Nigeria', value: self.name }] },
    { name: 'message', placeholder: 'Drop a message...', type: 'textarea' },
];

export const footerElements: { icon?: string, title: string }[] = [
    { title: '2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria.', icon: home },
    { title: 'Loyalbaze is almost here.' },
    { title: '+234 806 023 0285', icon: phone },
];
