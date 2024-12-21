import { FunctionComponent } from 'react';
import styles from './Navbar.module.scss';

import {
    ReorderFourOutline,
    DotsVertical,
    Search,
    Inbox,
    NotificationsOutline,
    Settings
} from "@icons";

export const Navbar: FunctionComponent = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.menuWrapper}>
                <img alt="Menu" src={ReorderFourOutline} />
            </div>

            <div className={styles.environmentSection}>
                <div className={styles.environmentSelect}>
                    <span>Environment</span>
                </div>
                <img alt="Options" src={DotsVertical} />
            </div>

            <div className={styles.mainSection}>
                <div className={styles.searchBar}>
                    <img alt="Search" src={Search} />
                    <span>Search</span>
                </div>

                <div className={styles.actionButtons}>
                    <img alt="Inbox" src={Inbox} />
                    <img alt="Notifications" src={NotificationsOutline} />
                    <img alt="Settings" src={Settings} />
                    <div className={styles.userAvatar} />
                </div>
            </div>
        </div>
    );
};