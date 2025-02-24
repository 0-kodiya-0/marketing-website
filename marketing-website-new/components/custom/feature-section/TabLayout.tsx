import React from 'react';
import { FileText, MessageSquare, CheckSquare, Code, Plus, MoreVertical } from 'lucide-react';
import { FeatureSection } from './FeatureSection';

export const TabLayout: React.FC = () => {
    return (
        <FeatureSection
            title="Seamless Multitasking with Tab Layout"
            description="Navigate between different tasks and documents with ease. Tabs keep your workspace organized and allow you to quickly switch between what you're working on."
            className="bg-gray-50"
        >
            <div className="h-96 bg-white border border-gray-200 overflow-hidden flex flex-col">
                {/* Tab bar */}
                <div className="flex border-b border-gray-200 flex-shrink-0 bg-white justify-between">
                    <div className="flex items-center">
                        {/* Active tab */}
                        <div className="flex items-center h-9 px-3 border-r border-gray-200 bg-white relative">
                            <FileText className="w-3.5 h-3.5 text-gray-600 mr-1.5" />
                            <span className="text-xs font-medium text-gray-700 pr-1">Project Notes.md</span>
                            <button className="ml-1 h-4 w-4 flex items-center justify-center rounded-full hover:bg-gray-100">
                                <svg width="8" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
                        </div>

                        {/* Inactive tabs */}
                        <div className="flex items-center h-9 px-3 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors">
                            <MessageSquare className="w-3.5 h-3.5 text-gray-400 mr-1.5" />
                            <span className="text-xs font-medium text-gray-500 pr-1">Chat</span>
                            <button className="ml-1 h-4 w-4 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <svg width="8" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex items-center h-9 px-3 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors">
                            <CheckSquare className="w-3.5 h-3.5 text-gray-400 mr-1.5" />
                            <span className="text-xs font-medium text-gray-500 pr-1">Tasks</span>
                            <button className="ml-1 h-4 w-4 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <svg width="8" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex items-center h-9 px-3 border-r border-gray-200 bg-green-50 hover:bg-green-100 transition-colors">
                            <Code className="w-3.5 h-3.5 text-green-600 mr-1.5" />
                            <span className="text-xs font-medium text-green-700 pr-1">main.js</span>
                            <button className="ml-1 h-4 w-4 flex items-center justify-center rounded-full hover:bg-green-200">
                                <svg width="8" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <button className="h-9 w-9 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Three dots menu */}
                    <button className="px-2 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                    </button>
                </div>

                {/* Tab content */}
                <div className="flex-grow flex overflow-hidden">
                    <div className="flex-grow overflow-auto p-4 bg-white">
                        <div className="prose prose-sm max-w-none">
                            <h1>Project Notes</h1>
                            <p>This is the content of the current tab. Click on different tabs to switch between views.</p>
                            <h2>Key Points</h2>
                            <ul>
                                <li>First point to remember about this project</li>
                                <li>Second important consideration</li>
                                <li>Resources needed for completion</li>
                            </ul>
                            <h2>Timeline</h2>
                            <p>Initial draft due: <strong>March 15, 2025</strong></p>
                            <p>Final submission: <strong>April 1, 2025</strong></p>

                            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
                                <p className="!text-blue-700">
                                    <strong>Tip:</strong> Click on tabs to switch between different views and tools. Create new tabs to open more documents or features simultaneously.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right shortcuts sidebar */}
                    <div className="w-14 border-l border-gray-200 bg-white">
                        <div className="py-4 h-full">
                            <div className="flex flex-col space-y-4 items-center">
                                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Files">
                                    <FileText className="w-5 h-5 text-gray-600" />
                                </button>

                                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Chat">
                                    <MessageSquare className="w-5 h-5 text-gray-600" />
                                </button>

                                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center" title="Tasks">
                                    <CheckSquare className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FeatureSection>
    );
};