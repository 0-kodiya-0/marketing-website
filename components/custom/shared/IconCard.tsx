import React from 'react';
import { motion } from 'framer-motion';

interface IconCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
        >
            <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};