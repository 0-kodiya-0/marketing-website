import React from 'react';
import StatsCard, { StatItemProps } from './StatsCard';
import ContentContainer from '@/app/layouts/ContentContainer';
import PageLayout from '@/app/layouts/PageLayout';

interface StatsSectionProps {
    stats?: StatItemProps[];
    className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
    stats = [
        { value: '50K+', label: 'Active Users' },
        { value: '80K+', label: 'Downloads' },
        { value: '4.9/5', label: 'User Rating' },
        { value: '99.9%', label: 'Uptime' }
    ],
    className = ''
}) => {
    return (
        <PageLayout className={`py-12 md:py-16 lg:py-20 ${className}`}>
            <ContentContainer>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div 
                            key={stat.label} 
                            className={`flex justify-center ${
                                index !== stats.length - 1 ? "md:border-r border-foreground/[0.06]" : ""
                            }`}
                        >
                            <StatsCard
                                value={stat.value}
                                label={stat.label}
                            />
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </PageLayout>
    );
};

export default StatsSection;