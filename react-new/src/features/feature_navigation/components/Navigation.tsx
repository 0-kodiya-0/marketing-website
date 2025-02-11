import { SummaryBar } from './SummaryBar';
import { DetailPane } from './DetailPane';

export function Navigation() {
  return (
    <div className="flex h-full">
      <SummaryBar />
      <DetailPane />
    </div>
  );
}