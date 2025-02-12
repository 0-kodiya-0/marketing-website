import { selectedFeatureType, useNavigationStore } from '../store';
import { SummarySection } from './SummarySection';
import { FeatureType } from '../types/store';
import { WorkspaceSummary } from '../../workspace';
import { Layout } from 'lucide-react';

export function SummaryBar() {
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
    <div className="w-16 bg-gray-50 border-r border-gray-200 py-4">
      <div className="flex flex-col space-y-4">
        {/* Features will inject their summary sections here */}
        {/* <SummarySection
          icon={<Layout className="w-5 h-5 text-gray-600" />}
          title='Workspace'
          featureComponent={}
          featureType='workspace'
          onSelect={handleFeatureSelect}
        /> */}
        <WorkspaceSummary onFeatureSelect={handleFeatureSelect} />
      </div>
    </div>
  );
}