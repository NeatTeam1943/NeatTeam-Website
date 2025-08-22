import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const appElement = document.querySelector('.app');
        if (appElement) {
            appElement.scrollTo(0, 0);
        }
        window.scrollTo(0, 0);

        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
} 