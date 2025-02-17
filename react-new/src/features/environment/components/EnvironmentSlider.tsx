import { useEffect, useState, useCallback } from 'react';
import { useCreateEnvironment, useEnvironments } from '../hooks/useEnvironments';
import { EnvironmentError, EnvironmentSliderProps } from '../types/props';
import { useEnvironmentStore } from '../store';
import { EnvironmentList } from './EnvironmentList';
import { ErrorView } from './ErrorView';
import { LoadingView } from './LoadingView';
import { Environment, EnvironmentPrivacy, EnvironmentStatus } from '../types/data';

export function EnvironmentSlider({
  onClose
}: EnvironmentSliderProps) {
  const [isEnvSettingUp, setEnvSettingUp] = useState(false);
  const [envSettingUpError, setEnvSettingUpError] = useState<EnvironmentError>({
    isError: false,
    message: ''
  });

  const {
    data: environments = [],
    isLoading: isLoadingEnvironments,
    error: fetchError
  } = useEnvironments();

  const createEnvironment = useCreateEnvironment();
  const selectedEnvironment = useEnvironmentStore(state => state.selectedEnvironment);
  const setEnvironment = useEnvironmentStore(state => state.setEnvironment);

  const getSliderStyle = useCallback(() => {
    return { top: `4px` };
  }, []);

  const setupEnvironment = useCallback(async () => {
    if (isLoadingEnvironments) return;

    try {
      const serverDefaultEnv = environments.find(env => env.name === 'Default Environment');
      const isLocalDefaultEnv = selectedEnvironment?.name === 'Default Environment';

      if (serverDefaultEnv && isLocalDefaultEnv) {
        setEnvironment(serverDefaultEnv);
        return;
      }

      if (isLocalDefaultEnv) {
        const created = await createEnvironment.mutateAsync({
          accountId: selectedEnvironment.accountId,
          name: selectedEnvironment.name,
          status: EnvironmentStatus.Active,
          privacy: EnvironmentPrivacy.Global
        });
        setEnvironment(created);
        return;
      }

    } catch (error) {
      setEnvSettingUpError({
        isError: true,
        message: error instanceof Error ? error.message : 'Environment setup failed'
      });
    }
  }, [environments, selectedEnvironment, createEnvironment, setEnvironment, isLoadingEnvironments]);

  useEffect(() => {
    setEnvSettingUp(true);
    setupEnvironment().finally(() => {
      setEnvSettingUp(false);
    });
  }, [isLoadingEnvironments]);

  if (isLoadingEnvironments || isEnvSettingUp) {
    return (
      <LoadingView getSliderStyle={getSliderStyle} />
    );
  }

  if (fetchError || envSettingUpError.isError) {
    return (
      <ErrorView
        getSliderStyle={getSliderStyle}
        onClick={onClose}
        error={fetchError?.message || envSettingUpError.message}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div
        className="absolute left-4 right-4 bg-white shadow-sm rounded-lg"
        style={getSliderStyle()}
        onClick={onClose}
      >
        <EnvironmentList
          environments={environments}
          selectedEnvironment={selectedEnvironment}
          onEnvironmentSelect={(env: Environment) => {
            setEnvironment(env);
            onClose();
          }}
        />
      </div>
    </div>
  );
}