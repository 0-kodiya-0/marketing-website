import React from 'react';
import { motion } from 'framer-motion';
import ContentContainer from '@/app/layouts/ContentContainer';

const FoundationsSection: React.FC = () => {
    const foundations = [
        {
            title: "Linear Sync Engine",
            description: "Built with a high-performance architecture and an obsessive focus on speed."
        },
        {
            title: "Enterprise-ready security",
            description: "Best-in-class security practices keep your work safe and secure at every layer."
        },
        {
            title: "Engineered for scale",
            description: "Built for teams of all sizes. From early-stage startups to global enterprises."
        }
    ];

    return (
        <section className="py-24 bg-background">
            <ContentContainer>
                {/* Main heading and intro text */}
                <div className="max-w-4xl mb-20">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Built on strong foundations
                    </motion.h1>
                    <motion.p 
                        className="text-lg text-muted max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Linear is so simple to use, it's easy to overlook the wealth of complex 
                        technologies packed under the hood that keep Linear robust, safe, and blazing fast.
                    </motion.p>
                </div>

                {/* Foundation items */}
                <div className="max-w-4xl border-t border-border-color">
                    {foundations.map((item, index) => (
                        <motion.div 
                            key={item.title}
                            className="py-12 border-b border-border-color"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-xl md:text-2xl font-medium mb-4 flex items-center">
                                {item.title}
                                {index === 1 && (
                                    <span className="ml-2 inline-block transform translate-y-[1px]">→</span>
                                )}
                            </h3>
                            <p className="text-muted text-lg">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </ContentContainer>
        </section>
    );
};

export default FoundationsSection;