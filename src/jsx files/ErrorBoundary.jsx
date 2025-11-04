import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ 
                    padding: '2rem', 
                    textAlign: 'center',
                    fontFamily: 'system-ui, sans-serif'
                }}>
                    <h1 style={{ color: '#d32f2f' }}>Something went wrong</h1>
                    <p style={{ color: '#666', marginTop: '1rem' }}>
                        {this.state.error?.message || 'An error occurred'}
                    </p>
                    <details style={{ marginTop: '1rem', textAlign: 'left' }}>
                        <summary style={{ cursor: 'pointer', color: '#1976d2' }}>
                            Error Details
                        </summary>
                        <pre style={{ 
                            background: '#f5f5f5', 
                            padding: '1rem', 
                            marginTop: '0.5rem',
                            overflow: 'auto',
                            fontSize: '0.875rem'
                        }}>
                            {this.state.error?.stack || this.state.error?.toString()}
                        </pre>
                    </details>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '1rem',
                            padding: '0.5rem 1rem',
                            background: '#1976d2',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

