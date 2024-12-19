import { FunctionComponent } from 'react';
import styles from './MainLayout.module.scss';
import LeftPanel from './componets/LeftPanel/LeftPanel';
import RightPanel from './componets/RightPanel/RightPanel';


export const MainLayout: FunctionComponent = () => {
    return (
        <div className={styles.mainlayout} >
            <LeftPanel></LeftPanel>
            <MainLayout></MainLayout>
            <RightPanel></RightPanel>
        </div>
    );
};
