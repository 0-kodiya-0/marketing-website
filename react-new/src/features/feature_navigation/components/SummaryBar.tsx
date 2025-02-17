import { selectedFeatureType, useNavigationStore } from '../store';
import { FeatureType } from '../types/store';
import { WorkspaceSummary } from '../../workspace';
import { Environment } from '../../environment/types/data';

interface SummaryBarProps {
  environment: Environment;
  className?: string;
}

export function SummaryBar({ environment, className }: SummaryBarProps) {
  const featureType = useNavigationStore(selectedFeatureType);
  const selectFeature = useNavigationStore(state => state.selectFeature);

  // This will be populated by feature registrations
  const handleFeatureSelect = (feature: FeatureType) => {
    if (feature === featureType) {
      return
    }
    selectFeature(feature)
  };

  return (
    <div className={`bg-white border-r border-gray-200 py-4 flex-shrink-0 ${className}`}>
      <div className="flex flex-col space-y-4">
        <WorkspaceSummary environment={environment} onFeatureSelect={handleFeatureSelect} />
      </div>
    </div>
  );
}