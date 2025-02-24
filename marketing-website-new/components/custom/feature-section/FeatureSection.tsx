import React from 'react';
import { motion } from 'framer-motion';
import ContentContainer from '@/layouts/ContentContainer';

interface FeatureSectionProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
    reversed?: boolean;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
    title,
    description,
    children,
    className = "",
    reversed = false
}) => {
    return (
        <section className={`py-16 md:py-24 ${className}`}>
            <ContentContainer>
                <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                    <div className="md:w-1/2">
                        <motion.h2
                            className="text-3xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {title}
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {description}
                        </motion.p>
                    </div>
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="shadow-lg rounded-lg overflow-hidden border border-gray-200"
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
};