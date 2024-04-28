import './Button.css'
import React from 'react';

export const Button = ({children}) => {
    return (
        <button type='submit' className='button'>
            {children}
        </button>
    );
}

