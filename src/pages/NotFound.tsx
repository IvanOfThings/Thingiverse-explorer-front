import React from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export const NotFound: React.FC = () => (
    <div>
        <h1 className='title' > 404!</h1>
        <h2>The page does not exist.</h2>
        <ButtonBackToHome />
    </div>
)

