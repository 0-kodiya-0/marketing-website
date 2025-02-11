import { ChevronLeft } from 'lucide-react';
import { useNavigationStore, selectedFeatureType } from '../store';
import { WorkspaceDetail } from '../../workspace';

export function DetailPane() {
    const selectedFeature = useNavigationStore(selectedFeatureType);
    const clearSelection = useNavigationStore(state => state.clearSelection);

    const renderFeatureContent = () => {
        switch (selectedFeature) {
            case 'workspace':
                return <WorkspaceDetail />
            case 'files':
                return <h1>Files component . </h1>
            case 'contacts':
                return <h1>Contacts component .</h1>
            default:
                return (
                    <div className="text-sm text-gray-500">
                        Select a feature to view its details
                    </div>
                );
        }
    };

    return (
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="h-12 border-b border-gray-200 flex items-center px-2">
                <button
                    onClick={clearSelection}
                    className="p-1 hover:bg-gray-100 rounded-md"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-500" />
                </button>
                <span className="ml-2 text-sm font-medium text-gray-900">
                    {selectedFeature ? selectedFeature.charAt(0).toUpperCase() + selectedFeature.slice(1) : ''}
                </span>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
                {renderFeatureContent()}
            </div>
        </div>
    );
}