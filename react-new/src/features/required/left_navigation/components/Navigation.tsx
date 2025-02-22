import { Panel } from 'react-resizable-panels';
import { DetailPane } from './DetailPane';
import { SummaryBar } from './SummaryBar';
import { Environment } from '../../required/environment/types/data';

interface NavigationProps {
  environment: Environment
  summaryBarClassName?: string;
  detailPaneClassName?: string;
}

export function Navigation({ environment, summaryBarClassName, detailPaneClassName }: NavigationProps) {

  return (
    <>
      <div className={`${summaryBarClassName}`}>
        <SummaryBar environment={environment} className='w-full h-full' />
      </div>
      <Panel defaultSize={20} minSize={5} collapsible={true} collapsedSize={1} className="h-full">
        <DetailPane
          environment={environment} className={`${detailPaneClassName}`} />
      </Panel>
    </>
  );
}