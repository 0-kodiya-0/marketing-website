import { Panel } from 'react-resizable-panels';
import { DetailPane } from './DetailPane';
import { SummaryBar } from './SummaryBar';

interface NavigationProps {
  summaryBarClassName?: string;
  detailPaneClassName?: string;
}

export function Navigation({ summaryBarClassName, detailPaneClassName }: NavigationProps) {

  return (
    <>
      <div className={`${summaryBarClassName}`}>
        <SummaryBar className='w-full h-full' />
      </div>
      <Panel defaultSize={20} minSize={5} collapsible={true} collapsedSize={1} className="h-full">
        <DetailPane
          className={`${detailPaneClassName}`} />
      </Panel>
    </>
  );
}