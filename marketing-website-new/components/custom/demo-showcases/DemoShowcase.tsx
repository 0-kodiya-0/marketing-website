import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MousePointer } from 'lucide-react';
import ContentContainer from "@/app/layouts/ContentContainer";
import PageLayout from "@/app/layouts/PageLayout";
import ShowcaseGrid from './ShowcaseGrid';

const DemoDescription = () => {
    return (
        <div className="py-12 bg-gradient-to-b from-background/50 to-background border-b border-white/10">
            <ContentContainer>
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold"
                    >
                        Interactive Feature Showcase
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted leading-relaxed"
                    >
                        Explore our main features through interactive demos. Each demo provides a realistic preview of the actual interface and functionality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                    >
                        {[
                            {
                                icon: <MousePointer className="mb-4 text-blue-400" size={24} />,
                                title: "Interactive UI",
                                description: "Click through different sections to see how features work in real-time"
                            },
                            {
                                icon: <Play className="mb-4 text-blue-400" size={24} />,
                                title: "Live Previews",
                                description: "Watch animations and transitions that mirror the actual application"
                            },
                            {
                                icon: <ArrowRight className="mb-4 text-blue-400" size={24} />,
                                title: "Feature Tour",
                                description: "Scroll through each section to explore different aspects of the platform"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {item.icon}
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-muted">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </ContentContainer>
        </div>
    );
};

const DemoShowcase = () => {
    return (
        <PageLayout>
            <div className="min-h-screen">
                <DemoDescription />
                <div className="py-12">
                    <ShowcaseGrid />
                </div>
            </div>
        </PageLayout>
    );
};

export default DemoShowcase;