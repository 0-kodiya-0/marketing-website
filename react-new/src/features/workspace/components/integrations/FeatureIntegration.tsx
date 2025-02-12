import { ChevronDown, ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureSectionProps {
    title: string;
    icon: ReactNode;
    count: number;
    isExpanded: boolean;
    onToggleExpand: () => void;
    isLoading?: boolean;
    children: ReactNode;
}

export function FeatureSection({
    title,
    icon,
    count,
    isExpanded,
    onToggleExpand,
    isLoading,
    children
}: FeatureSectionProps) {
    
    return (
        <div className="rounded-lg overflow-hidden border border-gray-200">
            <button
                onClick={onToggleExpand}
                className="w-full px-3 py-2 flex items-center justify-between
                 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
                <div className="flex items-center space-x-2">
                    {isExpanded ?
                        <ChevronDown className="w-4 h-4 text-gray-400" /> :
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    }
                    <div className="flex items-center space-x-2">
                        {icon}
                        <span className="text-sm font-medium text-gray-700">{title}</span>
                    </div>
                </div>

                <span className="text-xs bg-white text-gray-500 px-2 py-1 rounded-full">
                    {isLoading ? '...' : count}
                </span>
            </button>

            {isExpanded && (
                <div className="p-2 space-y-1 bg-white">
                    {isLoading ? (
                        <div className="space-y-2">
                            {[1, 2, 3].map((n) => (
                                <div
                                    key={n}
                                    className="h-8 bg-gray-50 rounded animate-pulse"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-1">
                            {children}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}