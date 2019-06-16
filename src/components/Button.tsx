import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonProps = {
    to: string
}

export const Button: React.FC<ButtonProps> = ({ to, children }) => (
    <Link className='button is-info' to={to} > {children}</Link>
)

