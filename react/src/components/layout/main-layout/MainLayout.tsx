import {FunctionComponent} from 'react';
import styles from './MainLayout.module.scss';
import RightPanel from "./componets/right-panel/RightPanel";
import MainPanel from "./componets/main-panel/MainPanel";
import LeftPanel from "./componets/left-panel/LeftPanel";

export const MainLayout: FunctionComponent = () => {
    return (
        <div className={styles.mainlayout}>
            <LeftPanel/>
            <MainPanel/>
            <RightPanel/>
        </div>
    );
};