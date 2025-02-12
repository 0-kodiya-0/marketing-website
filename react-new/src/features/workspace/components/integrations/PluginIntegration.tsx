import { Link } from 'lucide-react';
import { FeatureSection } from './FeatureIntegration';
import { useWorkspaceApps } from '../../hooks/useWorkspace';

interface PluginIntegrationProps {
    workspaceId: number;
    isExpanded: boolean;
    selectedId: string | number | null;
    onToggleExpand: () => void;
    onSelect: (id: string) => void;
}

export function PluginIntegration({
    workspaceId,
    isExpanded,
    selectedId,
    onToggleExpand,
    onSelect
}: PluginIntegrationProps) {
    // const { data: plugin = [], isLoading } = useWorkspaceApps(workspaceId);

    const plugins = [
        { id: "201", status: "active" },
        { id: "202", status: "inactive" },
        { id: "203", status: "active" }
    ];    

    return (
        <FeatureSection
            title="Connected Apps"
            icon={<Link className="w-4 h-4 text-gray-400" />}
            count={plugins.length}
            isExpanded={isExpanded}
            onToggleExpand={onToggleExpand}
            isLoading={false}
        >
            {plugins.map(app => (
                <button
                    key={app.id}
                    onClick={() => onSelect(app.id)}
                    className={`
            w-full px-2 py-1.5 rounded-md transition-colors
            flex items-center justify-between group text-left
            ${selectedId === app.id ?
                            'bg-blue-50 hover:bg-blue-100' :
                            'hover:bg-gray-50'
                        }
          `}
                >
                    <div className="flex items-center space-x-2 min-w-0">
                        <span className={`
              text-sm truncate flex-1
              ${selectedId === app.id ?
                                'text-blue-700' :
                                'text-gray-600'
                            }
            `}>
                            App Connection
                        </span>
                    </div>
                    <span className={`
            text-xs px-1.5 py-0.5 rounded-full flex-shrink-0
            ${app.status === 'active' ?
                            'bg-green-100 text-green-700' :
                            'bg-red-100 text-red-700'
                        }
          `}>
                        {app.status}
                    </span>
                </button>
            ))}
        </FeatureSection>
    );
}