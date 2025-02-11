import React from 'react';
import { TabContentProps } from '../types/props';

export const TabContent: React.FC<TabContentProps> = ({ contentState }) => {
    switch (contentState.type) {
        // case 'query-editor':
        //     return <QueryEditor state={contentState} />;
        // case 'data-viewer':
        //     return <DataViewer state={contentState} />;
        // case 'settings':
        //     return <Settings state={contentState} />;
        // case 'dashboard':
        //     return <Dashboard state={contentState} />;
        default:
            return <div>Unknown content type</div>;
    }
};