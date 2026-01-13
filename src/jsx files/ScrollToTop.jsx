import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    // Use useLayoutEffect for immediate scroll before paint
    useLayoutEffect(() => {
        // Scroll all possible scroll containers
        const appElement = document.querySelector('.app');
        const mainElement = document.querySelector('main');
        
        if (appElement) {
            appElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
        
        if (mainElement) {
            mainElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
        
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    // Also use useEffect as a fallback for async content
    useEffect(() => {
        // Small delay to ensure content is rendered (especially for pages with ScrollTrigger)
        const timeoutId = setTimeout(() => {
            const appElement = document.querySelector('.app');
            const mainElement = document.querySelector('main');
            
            if (appElement) {
                appElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }
            
            if (mainElement) {
                mainElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }
            
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
} 