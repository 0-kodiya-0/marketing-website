import { Environment } from "./data";

export interface EnvironmentStore {
    selectedEnvironment: Environment | null;
    setEnvironment: (environment: Environment) => void;
    getEnvironment: () => Environment | null;
}