import { EnvironmentListProps } from "../types/props";
import { EnvironmentCard } from "./EnvironmentCard";

export const EnvironmentList = ({
    environments,
    selectedEnvironment,
    onEnvironmentSelect,
}: EnvironmentListProps) => (
    <div className="p-4 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-min">
            {environments.map((env) => (
                <EnvironmentCard
                    key={env.id}
                    environment={env}
                    isSelected={env.id === selectedEnvironment?.id}
                    onSelect={() => onEnvironmentSelect(env)}
                />
            ))}
        </div>
    </div>
);