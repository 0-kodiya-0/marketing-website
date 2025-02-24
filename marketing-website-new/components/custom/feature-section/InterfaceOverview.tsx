import React from 'react';
import { Menu, MoreVertical, Search, Settings, ArrowDown, ArrowRight } from 'lucide-react';
import { FeatureSection } from './FeatureSection';

export const InterfaceOverview: React.FC = () => {
    return (
        <FeatureSection
            title="Unified Interface for All Your Needs"
            description="FusionSpace brings together all your tools, communications, and files in one cohesive interface. Navigate seamlessly between different aspects of your work without switching applications."
            className="bg-gray-50"
        >
            <div className="h-96 overflow-hidden relative">
                <div className="flex flex-col h-full bg-white">
                    {/* Top navigation bar */}
                    <nav className="h-12 border-b flex items-center bg-white">
                        <div className="w-16 flex items-center justify-center flex-shrink-0">
                            <button className="p-1.5 hover:bg-gray-100 rounded">
                                <Menu className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="w-64 border-x flex items-center h-full">
                            <div className="flex items-center h-full w-full">
                                <button className="flex-1 h-full px-4 flex items-center">
                                    <span className="text-sm font-medium truncate">Default Environment</span>
                                </button>
                                <div className="h-full border-l border-gray-200">
                                    <button className="h-full w-10 flex items-center justify-center">
                                        <MoreVertical className="w-4 h-4 text-gray-400" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex items-center justify-end px-4 space-x-2">
                            <div className="relative max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-64 pl-8 pr-4 py-1.5 text-sm bg-gray-50 border rounded-md"
                                />
                                <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2" />
                            </div>

                            <button className="p-1.5 hover:bg-gray-100 rounded">
                                <Settings className="w-5 h-5" />
                            </button>
                        </div>
                    </nav>

                    {/* Main content area with horizontal navigation */}
                    <div className="w-full flex-1 flex">
                        {/* Left summary column */}
                        <div className="w-16 h-full border-r"></div>

                        {/* Workspace detail column */}
                        <div className="h-full w-64 border-r"></div>

                        {/* Main content area with sidebar */}
                        <div className="h-full flex-1 flex flex-col">
                            {/* Tab bar */}
                            <div className="flex border-b border-gray-200 flex-shrink-0 bg-white"></div>

                            {/* Content and sidebar container */}
                            <div className="flex-grow flex">
                                {/* Tab content area */}
                                <div className="flex-grow overflow-auto p-4 bg-white"></div>

                                {/* Right shortcuts sidebar */}
                                <div className="w-14 border-l"></div>
                            </div>
                        </div>
                    </div>

                    {/* Labels with arrows for UI explanation */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded shadow-lg text-sm font-medium">
                        Navigation & Search
                        <ArrowDown className="w-4 h-4 ml-1 inline-block" />
                    </div>

                    <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded shadow-lg text-sm font-medium">
                        Workspace <br />Selection
                        <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                    </div>

                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded shadow-lg text-sm font-medium">
                        Feature <br />Navigation
                        <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                    </div>

                    <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded shadow-lg text-sm font-medium">
                        Content <br />Area
                    </div>
                </div>
            </div>
        </FeatureSection>
    );
};