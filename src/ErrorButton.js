import './ErrorButton.css';
import React from 'react';
import * as Sentry from '@sentry/react';

const ErrorButton = () => {
    const handleClick = () => {
        // This will throw an intentional error for testing
        try {
            throw new Error('This is a test error 1');
        } catch (error) {
            Sentry.captureException(error);
        }
    };

    return (
        <div>
            <input type="email" placeholder="Enter your email" />
            <button onClick={handleClick}>Trigger Error</button>
        </div>
    );
};

export default ErrorButton;
