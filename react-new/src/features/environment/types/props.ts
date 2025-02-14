import { Environment } from "./data";

export interface EnvironmentButtonProps {
}

export interface EnvironmentSliderProps {
    onClose: () => void;
}

export interface UpdateEnvironmentInputProps {
    onCancel: () => void;
}

export interface EnvironmentSetupState {
    selectedEnvironment: Environment;
    isLoading: boolean;
    error: Error | null;
    status: 'idle' | 'loading' | 'success' | 'error';
}

export interface UseEnvironmentFeatureProps {
    selectedEnvironment: Environment;
    isExpanded?: boolean;
}

export interface EnvironmentError {
    isError: boolean;
    message: string;
}

export interface CreateEnvironmentState {
    isCreating: boolean;
    newEnvName: string;
}

export type GetSliderStyle = () => React.CSSProperties;

// LoadingView Props
export interface LoadingViewProps {
    getSliderStyle: GetSliderStyle;
}

// ErrorView Props
export interface ErrorViewProps {
    onClick: () => void;
    getSliderStyle: GetSliderStyle;
    error: string;
}

export interface EnvironmentCardProps {
    environment: Environment;
    isSelected: boolean;
    onSelect: () => void;
}

export interface CreateEnvironmentInputProps {
    onCancel: () => void;
}

export interface CreateEnvironmentButtonProps {
    onClick: () => void;
    isCreating: boolean;
}

export interface EnvironmentListProps {
    environments: Environment[];
    selectedEnvironment: Environment | null;
    onEnvironmentSelect: (environment: Environment) => void;
}