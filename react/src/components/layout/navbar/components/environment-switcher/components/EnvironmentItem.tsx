import React, { useState, forwardRef } from 'react';
import { EnvironmentItemProps } from '../EnvironmentSwitcher.types';
import styles from './EnvironmentItem.module.scss';

const EnvironmentItemComponent = forwardRef<HTMLDivElement, EnvironmentItemProps>(({
                                                                                       environment,
                                                                                       index,
                                                                                       onDragStart,
                                                                                       onDrop
                                                                                   }, ref) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(true);
        onDragStart(e, index);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        onDrop(e, index);
        setIsDragging(false);
    };

    return (
        <div
            ref={ref}
            className={`${styles.environmentItem} ${isDragging ? styles.isDragging : ''}`}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            tabIndex={0}
            role="button"
            aria-label={`Environment ${environment.environmentName}`}
        >
            <div className={styles.imageContainer}>
                <img
                    src={environment.workingScreenImage}
                    alt={environment.environmentName}
                />
            </div>
            <div className={styles.environmentInfo}>
                <span className={styles.environmentName}>
                    {environment.environmentName}
                </span>
                {environment.notificationsCount > 0 && (
                    <span className={styles.notificationBadge}>
                        {environment.notificationsCount}
                    </span>
                )}
            </div>
        </div>
    );
});

EnvironmentItemComponent.displayName = 'EnvironmentItem';

export const EnvironmentItem = EnvironmentItemComponent;