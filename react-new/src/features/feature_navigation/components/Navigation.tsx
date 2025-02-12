import { SummaryBar } from './SummaryBar';
import { DetailPane } from './DetailPane';

export function Navigation() {
  return (
    <div className="flex h-full">
      <div className="flex-shrink-0 w-16 h-full">
        <SummaryBar />
      </div>
      <div className="flex-1 h-full">
        <DetailPane />
      </div>
    </div>
  );
}