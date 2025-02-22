import { FileText } from 'lucide-react';
import { FeatureSection } from './FeatureIntegration.tsx';
import { useWorkspaceFiles } from '../../hooks/useWorkspace.ts';

interface FilesIntegrationProps {
    workspaceId: number;
    isExpanded: boolean;
    selectedId: string | number | null;
    onToggleExpand: () => void;
    onSelect: (id: number) => void;
}

export function FilesIntegration({
    workspaceId,
    isExpanded,
    selectedId,
    onToggleExpand,
    onSelect
}: FilesIntegrationProps) {
    // const { data: file = [], isLoading } = useWorkspaceFiles(workspaceId);

    const files = [
        { id: 1, name: "Document.pdf", size: 2048, source: "local" },
        { id: 2, name: "Image.png", size: 512000, source: "cloud" },
        { id: 3, name: "Presentation.pptx", size: 10485760, source: "local" }
    ];
    

    const formatFileSize = (size: number) => {
        if (size < 1024) return `${size} B`;
        if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
        return `${(size / (1024 * 1024)).toFixed(1)} MB`;
    };

    return (
        <FeatureSection
            title="Files"
            icon={<FileText className="w-4 h-4 text-gray-400" />}
            count={files.length}
            isExpanded={isExpanded}
            onToggleExpand={onToggleExpand}
            isLoading={false}
        >
            {files.map(file => (
                <button
                    key={file.id}
                    onClick={() => onSelect(file.id)}
                    className={`
            w-full px-2 py-1.5 rounded-md transition-colors
            flex items-center justify-between group text-left
            ${selectedId === file.id ?
                            'bg-blue-50 hover:bg-blue-100' :
                            'hover:bg-gray-50'
                        }
          `}
                >
                    <div className="flex items-center space-x-2 min-w-0">
                        <FileText className={`
              w-4 h-4 flex-shrink-0
              ${selectedId === file.id ?
                                'text-blue-600' :
                                'text-gray-400'
                            }
            `} />
                        <span className={`
              text-sm truncate
              ${selectedId === file.id ?
                                'text-blue-700' :
                                'text-gray-600'
                            }
            `}>
                            {file.name}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                        <span className="text-xs text-gray-400">
                            {formatFileSize(file.size)}
                        </span>
                        <span className={`
              text-xs px-1.5 py-0.5 rounded-full
              ${file.source === 'local' ?
                                'bg-gray-100 text-gray-700' :
                                'bg-blue-100 text-blue-700'
                            }
            `}>
                            {file.source}
                        </span>
                    </div>
                </button>
            ))}
        </FeatureSection>
    );
}