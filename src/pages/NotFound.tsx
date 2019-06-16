import React from 'react';
import { Button } from '../components/Button'

export const NotFound: React.FC = () => (
    <div>
        <h1 className='title' > 404!</h1>
        <h2>The page does not exist.</h2>
        <Button to='/'>Go Back to Home</Button>
    </div >
)

