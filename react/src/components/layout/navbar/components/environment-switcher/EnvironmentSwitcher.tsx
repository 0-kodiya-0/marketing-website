import React, { FC, useEffect, useRef, useState } from 'react';
import { Environment, EnvironmentSwitcherProps } from './EnvironmentSwitcher.types';
import { EnvironmentItem } from './components/EnvironmentItem';
import styles from './EnvironmentSwitcher.module.scss';

export const EnvironmentSwitcher: FC<EnvironmentSwitcherProps> = ({ isOpen, onClose }) => {
    const [environments, setEnvironments] = useState<Environment[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

    // Fetch environments data
    useEffect(() => {
        // Replace with your data fetching logic
        const fetchEnvironments = async () => {
            try {
                // Mock data - replace with actual API call
                const data = await Promise.resolve([
                    {
                        id: '1',
                        environmentName: 'Development',
                        workingScreenImage: '/api/placeholder/200/100', // Placeholder image
                        notificationsCount: 3
                    },
                    {
                        id: '2',
                        environmentName: 'Testing',
                        workingScreenImage: '/api/placeholder/200/100',
                        notificationsCount: 0
                    },
                    {
                        id: '3',
                        environmentName: 'Production',
                        workingScreenImage: '/api/placeholder/200/100',
                        notificationsCount: 5
                    },
                    {
                        id: '4',
                        environmentName: 'Staging',
                        workingScreenImage: '/api/placeholder/200/100',
                        notificationsCount: 1
                    },
                    {
                        id: '5',
                        environmentName: 'QA',
                        workingScreenImage: '/api/placeholder/200/100',
                        notificationsCount: 2
                    }
                ]);
                setEnvironments(data);
            } catch (error) {
                console.error('Error fetching environments:', error);
            }
        };
        if (isOpen) {
            fetchEnvironments();
        }
    }, [isOpen]);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const environmentRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Initialize refs array when environments change
    useEffect(() => {
        environmentRefs.current = environmentRefs.current.slice(0, environments.length + 1);
    }, [environments]);

    // Drag and drop handlers
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        setDraggedIndex(index);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
        e.preventDefault();
        if (draggedIndex === null || draggedIndex === dropIndex) return;

        const newEnvironments = [...environments];
        const [draggedItem] = newEnvironments.splice(draggedIndex, 1);
        newEnvironments.splice(dropIndex, 0, draggedItem);

        setEnvironments(newEnvironments);
        setDraggedIndex(null);
    };

    // Add new environment handler
    const handleAddEnvironment = () => {
        // Implement your add environment logic here
        console.log('Add new environment');
    };

    if (!isOpen) return null;

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}>
            <div
                ref={containerRef}
                className={`${styles.container} ${isOpen ? styles.visible : ''}`}>
                <div className={styles.scrollContainer}>
                    <div className={styles.environmentList}>
                        {environments.map((environment, index) => (
                            <EnvironmentItem
                                key={environment.id}
                                ref={(el: HTMLDivElement | null): void => {
                                    environmentRefs.current[index] = el;
                                }}
                                environment={environment}
                                index={index}
                                onDragStart={handleDragStart}
                                onDrop={handleDrop}
                            />
                        ))}
                        <div
                            className={`${styles.addEnvironment} ${styles.focusable}`}
                            onClick={handleAddEnvironment}
                            ref={(el: HTMLDivElement | null): void => {
                                environmentRefs.current[environments.length] = el;
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label="Add new environment">
                            {/* Add your plus icon here */}
                            <span>Add Environment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};