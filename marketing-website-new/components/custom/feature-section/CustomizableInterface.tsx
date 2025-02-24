import React from 'react';
import { Layout } from 'lucide-react';
import { FeatureSection } from './FeatureSection';

export const CustomizableInterface: React.FC = () => {
    return (
        <FeatureSection
            title="Personalize Your Workspace"
            description="Make FusionSpace truly yours by customizing the interface to match your workflow. Drag and drop components, resize panels, and arrange tools exactly how you need them."
            reversed={true}
        >
            <div className="h-96 bg-white p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-50 opacity-50"></div>

                {/* Customization overlay */}
                <div className="relative z-10 h-full">
                    <div className="border-2 border-dashed border-blue-400 rounded-lg h-full flex items-center justify-center">
                        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                            <Layout className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Drag & Drop Interface</h3>
                            <p className="text-gray-600 mb-4">Rearrange components to build your ideal workspace</p>

                            <div className="flex flex-wrap gap-3 justify-center">
                                <div className="px-3 py-1.5 bg-blue-100 border border-blue-300 rounded text-blue-700 text-sm">Files Panel</div>
                                <div className="px-3 py-1.5 bg-green-100 border border-green-300 rounded text-green-700 text-sm">Chat Window</div>
                                <div className="px-3 py-1.5 bg-purple-100 border border-purple-300 rounded text-purple-700 text-sm">Task Board</div>
                                <div className="px-3 py-1.5 bg-yellow-100 border border-yellow-300 rounded text-yellow-700 text-sm">Calendar</div>
                                <div className="px-3 py-1.5 bg-red-100 border border-red-300 rounded text-red-700 text-sm">Notes</div>
                                <div className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-gray-700 text-sm">+ Add Component</div>
                            </div>
                        </div>
                    </div>

                    {/* Resize handles */}
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 h-16 w-1.5 bg-blue-400 rounded cursor-ew-resize"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-blue-400 rounded cursor-ns-resize"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-500 rounded cursor-nwse-resize"></div>
                </div>
            </div>
        </FeatureSection>
    );
};