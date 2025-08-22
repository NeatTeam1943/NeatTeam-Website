import React from 'react';
import '../../css files/pages/NotFound.css';

export default function NotFound() {
    return (
        <div className="not-found-container">
            <div className="bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
        </div>
    );
}