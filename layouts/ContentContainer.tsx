import React from 'react';
import type { PageLayoutProps } from './page.types';

const ContentContainer: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
    return (
        <div className={`mx-auto w-full max-w-screen-xl ${className}`}>
            {children}
        </div>
    );
};

export default ContentContainer;