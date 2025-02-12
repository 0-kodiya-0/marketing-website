import { LayoutList } from 'lucide-react';

export function WorkspaceEmptyIcon() {
    return (
        <div className="
            flex flex-col items-center justify-center
            w-full aspect-square rounded-lg border-gray-400
            text-sm text-gray-500
        ">
            <LayoutList />
        </div>
    );
}