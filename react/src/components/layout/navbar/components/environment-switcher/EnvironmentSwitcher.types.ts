import React from "react";

export interface Environment {
    id: string;
    environmentName: string;
    workingScreenImage: string;
    notificationsCount: number;
}

export interface EnvironmentSwitcherProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface EnvironmentItemProps {
    environment: Environment;
    index: number;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
    onDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
    ref?: React.RefObject<HTMLDivElement>;
}