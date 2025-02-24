import React from 'react';
import { BrainCircuit, FileText, MessageSquare, CheckSquare } from 'lucide-react';
import { FeatureSection } from './FeatureSection';
import { AnimatedBeam } from '../shared/AnimatedBeam';

export const AIFeatures: React.FC = () => {
    return (
        <FeatureSection
            title="AI-Powered Productivity"
            description="Experience the power of AI to boost your productivity. FusionSpace uses artificial intelligence to help you summarize content, generate smart questions, automate tasks, and optimize your workflow."
            className="bg-gray-50"
        >
            <div className="h-96 bg-white p-6 relative">
                <div className="h-full flex flex-col">
                    <div className="text-center mb-6">
                        <BrainCircuit className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                        <h3 className="text-lg font-semibold">AI Assistant</h3>
                    </div>

                    <div className="flex-1 relative">
                        {/* AI Flow Diagram */}
                        <div className="absolute inset-0">
                            {/* Document Node */}
                            <div className="absolute top-0 left-1/4 transform -translate-x-1/2 bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-sm">
                                <div className="flex items-center">
                                    <FileText className="w-5 h-5 text-blue-500 mr-2" />
                                    <span className="text-sm font-medium">Documents</span>
                                </div>
                            </div>

                            {/* AI Processing Node */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-50 border border-purple-200 rounded-lg p-3 shadow-sm">
                                <div className="flex items-center">
                                    <BrainCircuit className="w-5 h-5 text-purple-500 mr-2" />
                                    <span className="text-sm font-medium">AI Processing</span>
                                </div>
                            </div>

                            {/* Chat Node */}
                            <div className="absolute top-0 right-1/4 transform translate-x-1/2 bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm">
                                <div className="flex items-center">
                                    <MessageSquare className="w-5 h-5 text-green-500 mr-2" />
                                    <span className="text-sm font-medium">Smart Chat</span>
                                </div>
                            </div>

                            {/* Tasks Node */}
                            <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 bg-amber-50 border border-amber-200 rounded-lg p-3 shadow-sm">
                                <div className="flex items-center">
                                    <CheckSquare className="w-5 h-5 text-amber-500 mr-2" />
                                    <span className="text-sm font-medium">Task Automation</span>
                                </div>
                            </div>

                            {/* Summary Node */}
                            <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 bg-red-50 border border-red-200 rounded-lg p-3 shadow-sm">
                                <div className="flex items-center">
                                    <FileText className="w-5 h-5 text-red-500 mr-2" />
                                    <span className="text-sm font-medium">Smart Summaries</span>
                                </div>
                            </div>

                            {/* Connection beams */}
                            <AnimatedBeam
                                className="absolute top-12 left-1/4 w-1/4 h-32"
                                fromClassName="left-0 top-0"
                                toClassName="left-full top-full"
                            />

                            <AnimatedBeam
                                className="absolute top-12 right-1/4 w-1/4 h-32"
                                fromClassName="right-0 top-0"
                                toClassName="right-full top-full"
                            />

                            <AnimatedBeam
                                className="absolute bottom-12 left-1/4 w-1/4 h-32"
                                fromClassName="left-0 bottom-0"
                                toClassName="left-full bottom-full"
                            />

                            <AnimatedBeam
                                className="absolute bottom-12 right-1/4 w-1/4 h-32"
                                fromClassName="right-0 bottom-0"
                                toClassName="right-full bottom-full"
                            />
                        </div>
                    </div>

                    <div className="mt-4 bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs text-gray-600">
                        AI features analyze your documents, communication, and tasks to provide intelligent suggestions, automate routine work, and optimize your workflow.
                    </div>
                </div>
            </div>
        </FeatureSection>
    );
};