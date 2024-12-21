import { FunctionComponent } from 'react';
import styles from './MainPanel.module.scss';

const MainPanel: FunctionComponent = () => {
    return (
        <div className={styles.mainpanel}>
            <div className={styles.content}>
                <h1>Hello</h1>
                {/* Your main content goes here */}
            </div>
        </div>
    );
};

export default MainPanel;