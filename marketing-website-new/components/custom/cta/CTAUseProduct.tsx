import React from 'react';
import { motion } from 'framer-motion';
import ContentContainer from '@/layouts/ContentContainer';

export const CTAUseProduct: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <ContentContainer>
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Ready to Transform Your Workflow?
                    </motion.h2>
                    <motion.p
                        className="text-xl mb-8 text-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Start using FusionSpace today and experience a new level of productivity.
                        Join thousands of professionals who have already made the switch.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg transition-colors">
                            Download Now
                        </button>
                        <button className="border border-white text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium text-lg transition-colors">
                            Try Online Demo
                        </button>
                    </motion.div>
                </div>
            </ContentContainer>
        </section>
    );
};