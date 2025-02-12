import { useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigationStore, selectedFeatureType } from '../store';
import { WorkspaceDetail } from '../../workspace';

export function DetailPane() {
    const selectedFeature = useNavigationStore(selectedFeatureType);
    const [selectedFeatureBefore, setSelectFeatureBefore] = useState(selectedFeature);
    const clearSelection = useNavigationStore(state => state.clearSelection);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [title, setTitle] = useState<null | string>(null);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const renderFeatureContent = () => {
        switch (selectedFeature) {
            case 'workspace':
                return <WorkspaceDetail setTitle={(title) => {setTitle(title)}} />;
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

    useEffect(() => {
        if (selectedFeature !== selectedFeatureBefore) {
            clearSelection();
            setSelectFeatureBefore(selectedFeature);
        }
    }, [selectedFeature])

    return (
        <div
            className={`
                bg-white border-r border-gray-200 flex flex-col h-full transition-all duration-300
                ${isCollapsed ? 'w-10' : 'min-w-10'}
            `}
        >
            {/* Header */}
            <div className="h-12 border-b border-gray-200 flex items-center px-2 flex-shrink-0">
                <button
                    onClick={toggleCollapse}
                    className="p-1 hover:bg-gray-100 rounded-md transition-all"
                >
                    <ChevronLeft
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 
                        ${isCollapsed ? 'rotate-180' : ''}`}
                    />
                </button>
                {!isCollapsed && (
                    <span className="ml-2 text-sm font-medium text-gray-900 truncate">
                        {title ? title : selectedFeature
                            ? selectedFeature.charAt(0).toUpperCase() + selectedFeature.slice(1)
                            : ''}
                    </span>
                )}
            </div>

            {/* Content */}
            {!isCollapsed && (
                <div className="flex-1 overflow-y-auto p-4">
                    {renderFeatureContent()}
                </div>
            )}
        </div>
    );
}