import { useRef, useEffect, useState } from "react";
import { useCreateWorkspace } from "../hooks/useWorkspace";
import { WorkspaceType, WorkspaceCategory, WorkspaceVisibility } from "../../../types/data-structure.types";

interface CreateWorkspaceInputProps {
    onCancel: () => void;
}

interface FormData {
    name: string;
    description: string;
    type: WorkspaceType;
    category: WorkspaceCategory;
    subcategory: string;
    visibility: WorkspaceVisibility;
}

export const CreateWorkspaceInput: React.FC<CreateWorkspaceInputProps> = ({
    onCancel
}) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        description: '',
        type: WorkspaceType.Personal,
        category: WorkspaceCategory.Work,
        subcategory: '',
        visibility: WorkspaceVisibility.Private
    });
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const createWorkspace = useCreateWorkspace();

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleCreateWorkspace = async () => {
        const trimmedName = formData.name.trim();
        if (trimmedName.length <= 0) {
            setError('Workspace name cannot be empty');
            return;
        }

        setError(null);
        setIsLoading(true);

        try {
            await createWorkspace.mutateAsync({
                ...formData,
                name: trimmedName
            });
            onCancel(); // Close the input form after successful creation
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to create workspace');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleCreateWorkspace();
        } else if (e.key === 'Escape') {
            onCancel();
        }
    };

    return (
        <div className="fixed inset-0 z-50" onClick={onCancel}>
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white shadow-sm rounded-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4">
                    <h2 className="text-lg font-medium mb-4">Create New Workspace</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Workspace name"
                                value={formData.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setFormData(prev => ({ ...prev, name: e.target.value }))}
                                onKeyDown={handleKeyPress}
                                disabled={isLoading}
                                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none 
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                            <textarea
                                placeholder="Description (optional)"
                                value={formData.description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                    setFormData(prev => ({ ...prev, description: e.target.value }))}
                                disabled={isLoading}
                                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none 
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                disabled:bg-gray-100 disabled:cursor-not-allowed"
                                rows={3}
                            />
                            <select
                                value={formData.type}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    setFormData(prev => ({ ...prev, type: e.target.value as WorkspaceType }))}
                                disabled={isLoading}
                                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none 
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                disabled:bg-gray-100 disabled:cursor-not-allowed"
                            >
                                <option value="personal">Personal</option>
                                <option value="organization">Organization</option>
                            </select>
                            <select
                                value={formData.category}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    setFormData(prev => ({ ...prev, category: e.target.value as WorkspaceCategory }))}
                                disabled={isLoading}
                                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none 
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                disabled:bg-gray-100 disabled:cursor-not-allowed"
                            >
                                <option value="work">Work</option>
                                <option value="education">Education</option>
                                <option value="personal">Personal</option>
                                <option value="research">Research</option>
                                <option value="other">Other</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Subcategory (optional)"
                                value={formData.subcategory}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setFormData(prev => ({ ...prev, subcategory: e.target.value }))}
                                disabled={isLoading}
                                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none 
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                            <select
                                value={formData.visibility}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    setFormData(prev => ({ ...prev, visibility: e.target.value as WorkspaceVisibility }))}
                                disabled={isLoading}
                                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none 
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                disabled:bg-gray-100 disabled:cursor-not-allowed"
                            >
                                <option value="private">Private</option>
                                <option value="shared">Shared</option>
                                <option value="public">Public</option>
                            </select>
                            {error && (
                                <span className="text-xs text-red-500">{error}</span>
                            )}
                        </div>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={onCancel}
                                disabled={isLoading}
                                className="px-4 py-2 text-sm text-gray-600 bg-gray-100 
                                rounded-md hover:bg-gray-200 transition-colors
                                disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCreateWorkspace}
                                disabled={isLoading}
                                className={`px-4 py-2 text-sm text-white rounded-md transition-colors
                                ${isLoading
                                        ? 'bg-blue-400 cursor-not-allowed'
                                        : 'bg-blue-500 hover:bg-blue-600'
                                    }`}
                            >
                                {isLoading ? 'Creating...' : 'Create Workspace'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};