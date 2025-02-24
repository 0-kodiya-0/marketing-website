import React from 'react';
import { Plus, CheckSquare } from 'lucide-react';
import { FeatureSection } from './FeatureSection';

export const EnvironmentSwitcher: React.FC = () => {
    return (
        <FeatureSection
            title="Tailor-Made Environments for Every Role"
            description="Switch between different environments designed for specific roles and tasks. Whether you're working as a student, developer, or project manager, FusionSpace adapts to your needs."
            reversed={true}
        >
            <div className="p-6 bg-white h-72 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="h-12 border-b border-gray-200 flex items-center px-4 justify-between bg-white">
                            <div className="transition-opacity duration-300">
                                <span className="text-sm font-medium text-gray-900">Environment Selection</span>
                            </div>
                        </div>

                        <div className="bg-white">
                            <div className="py-2 px-2">
                                <button className="w-full py-2 px-3 flex items-center justify-between hover:bg-blue-50 rounded-md transition-colors bg-blue-100">
                                    <div className="flex items-center space-x-2">
                                        <div className="rounded-full bg-blue-500 w-8 h-8 flex items-center justify-center text-white font-semibold">S</div>
                                        <span className="text-sm font-medium text-gray-900">Student Environment</span>
                                    </div>
                                    <CheckSquare className="w-4 h-4 text-blue-500" />
                                </button>
                            </div>

                            <div className="py-2 px-2">
                                <button className="w-full py-2 px-3 flex items-center justify-between hover:bg-blue-50 rounded-md transition-colors">
                                    <div className="flex items-center space-x-2">
                                        <div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-gray-700 font-semibold">D</div>
                                        <span className="text-sm font-medium text-gray-700">Developer Environment</span>
                                    </div>
                                </button>
                            </div>

                            <div className="py-2 px-2">
                                <button className="w-full py-2 px-3 flex items-center justify-between hover:bg-blue-50 rounded-md transition-colors">
                                    <div className="flex items-center space-x-2">
                                        <div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-gray-700 font-semibold">P</div>
                                        <span className="text-sm font-medium text-gray-700">Project Manager Environment</span>
                                    </div>
                                </button>
                            </div>

                            <div className="py-2 px-2">
                                <button className="w-full py-2 px-3 flex items-center justify-between hover:bg-blue-50 rounded-md transition-colors border border-dashed border-gray-300">
                                    <div className="flex items-center space-x-2">
                                        <div className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center text-gray-500">
                                            <Plus className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-500">Create New Environment</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-500 text-center">
                        Each environment comes with specialized tools and layouts <br />tailored to specific work requirements
                    </div>
                </div>
            </div>
        </FeatureSection>
    );
};