import { Environment } from "../../../types/data-structure.types";

export interface EnvironmentStore {
    selectedEnvironment: Environment;
    setEnvironment: (environment: Environment) => void;
    getEnvironment: () => Environment;
}