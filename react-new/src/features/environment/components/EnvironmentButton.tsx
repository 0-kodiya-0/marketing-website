import { MoreVertical } from 'lucide-react/';
import { EnvironmentButtonProps } from '../types/props';
import { useState, useCallback, useRef, useEffect } from 'react';
import { EnvironmentSlider } from './EnvironmentSlider';
import { useEnvironmentStore } from '../store';
import { CreateEnvironmentInput } from './CreateEnvironmentInput';
import { UpdateEnvironmentInput } from './UpdateEnvironmentInput';

export function EnvironmentButton({ }: EnvironmentButtonProps) {
  const environment = useEnvironmentStore(state => state.selectedEnvironment);

  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isCreateEnvOpen, setIsCreateEnvOpen] = useState(false);
  const [isUpdateEnvOpen, setIsUpdateEnvOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEnvironmentClick = useCallback(() => {
    setIsSliderOpen(true);
  }, []);

  const handleDropdownToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(prev => !prev);
  }, []);

  const handleEditClick = useCallback(() => {
    setIsDropdownOpen(false);
    setIsUpdateEnvOpen(true);
  }, []);

  const handleCreateClick = useCallback(() => {
    setIsDropdownOpen(false);
    setIsCreateEnvOpen(true);
  }, []);

  const handleSliderClose = useCallback(() => {
    setIsSliderOpen(false);
  }, []);

  const handleCreateEnvClose = useCallback(() => {
    setIsCreateEnvOpen(false);
  }, []);

  const handleUpdateEnvClose = useCallback(() => {
    setIsUpdateEnvOpen(false);
  }, []);

  return (
    <div className="flex items-center h-full w-full">
      <button
        onClick={handleEnvironmentClick}
        className="flex-1 h-full px-4 flex items-center min-w-0 transition-colors hover:bg-gray-50"
      >
        <div className="flex items-center min-w-0 w-full">
          <span className="text-sm font-medium truncate">
            {environment.name}
          </span>
          {environment.status !== 'active' && (
            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${environment.status === 'archived'
                ? 'bg-gray-200 text-gray-600'
                : 'bg-red-100 text-red-600'
              }`}>
              {environment.status}
            </span>
          )}
        </div>
      </button>

      <div className="h-full border-l border-gray-200 relative" ref={dropdownRef}>
        <button
          onClick={handleDropdownToggle}
          className="h-full w-10 flex items-center justify-center transition-colors hover:bg-gray-50"
          aria-label="Environment options"
        >
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
            <button
              onClick={handleEditClick}
              className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Edit Environment
            </button>
            <button
              onClick={handleCreateClick}
              className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Create New Environment
            </button>
          </div>
        )}
      </div>

      {isCreateEnvOpen && (
        <CreateEnvironmentInput onCancel={handleCreateEnvClose} />
      )}

      {isUpdateEnvOpen && (
        <UpdateEnvironmentInput onCancel={handleUpdateEnvClose} />
      )}

      {isSliderOpen && (
        <EnvironmentSlider
          onClose={handleSliderClose}
        />
      )}
    </div>
  );
}