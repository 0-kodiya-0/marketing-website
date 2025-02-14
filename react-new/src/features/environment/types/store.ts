import { Environment } from "./data";

export interface EnvironmentStore {
    selectedEnvironment: Environment;
    setEnvironment: (environment: Environment) => void;
    getEnvironment: () => Environment;
}