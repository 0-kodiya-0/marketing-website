import { useCallback, useEffect, useState } from 'react';
import { useNavigationStore, selectedFeatureType } from '../store';
import { WorkspaceDetail } from '../../workspace';

interface DetailPaneProps {
    className?: string;
}

export function DetailPane({ className }: DetailPaneProps) {
    const selectedFeature = useNavigationStore(selectedFeatureType);
    const [selectedFeatureBefore, setSelectFeatureBefore] = useState(selectedFeature);
    const clearSelection = useNavigationStore(state => state.clearSelection);
    const [title, setTitle] = useState<null | string>(null);

    const setTitleCallBack = useCallback((title: string | null) => {
        setTitle(title)
    }, []);

    useEffect(() => {
        if (selectedFeature !== selectedFeatureBefore) {
            clearSelection();
            setSelectFeatureBefore(selectedFeature);
        }
    }, [selectedFeature])

    const renderFeatureContent = () => {
        switch (selectedFeature) {
            case 'workspace':
                return <WorkspaceDetail setTitle={setTitleCallBack} />;
            case 'files':
                return <h1>Files component.</h1>;
            case 'contacts':
                return <h1>Contacts component.</h1>;
            default:
                return (
                    <div className="text-sm text-gray-500">
                        Select a feature to view its details
                    </div>
                );
        }
    };

    return (
        <div
            className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out ${className}
            `}
        >
            {/* Header */}
            <div className="h-12 border-b border-gray-200 flex items-center px-2 flex-shrink-0 overflow-hidden">
                {/* <button
                    onClick={onCollapse}
                    className="p-1 hover:bg-gray-100 rounded-md transition-all flex-shrink-0"
                >
                    <ChevronLeft
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 
                        ${isCollapsed ? 'rotate-180' : ''}`}
                    />
                </button> */}
                <div className={`transition-opacity duration-300`}>
                    <span className="ml-2 text-sm font-medium text-gray-900 truncate">
                        {title ? title : selectedFeature
                            ? selectedFeature.charAt(0).toUpperCase() + selectedFeature.slice(1)
                            : ''}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div
                className={`flex-1 overflow-y-auto transition-all duration-300 p-4 opacity-100 w-full 
                    custom-scrollbar
                `}
            >
                {renderFeatureContent()}
            </div>
        </div>
    );
}