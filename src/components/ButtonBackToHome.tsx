import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBackToHome: React.FC = () => (
    <Link className='button is-info' to='/' > Go back to Home page</Link>
)

