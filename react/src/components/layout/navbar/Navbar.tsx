import { FunctionComponent, useState } from 'react';
import styles from './Navbar.module.scss';
import { EnvironmentSwitcher } from './components/environment-switcher/EnvironmentSwitcher';

import {
    ReorderFourOutline,
    DotsVertical,
    Search,
    Inbox,
    NotificationsOutline,
    Settings
} from "@icons";

export const Navbar: FunctionComponent = () => {
    const [isEnvironmentSwitcherOpen, setIsEnvironmentSwitcherOpen] = useState(false);

    const handleEnvironmentClick = () => {
        setIsEnvironmentSwitcherOpen(true);
    };

    const handleEnvironmentClose = () => {
        setIsEnvironmentSwitcherOpen(false);
    };

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.menuWrapper}>
                    <img alt="Menu" src={ReorderFourOutline} />
                </div>

                <div className={styles.environmentSection}>
                    <div
                        className={styles.environmentSelect}
                        onClick={handleEnvironmentClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleEnvironmentClick();
                            }
                        }}
                    >
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

            <EnvironmentSwitcher
                isOpen={isEnvironmentSwitcherOpen}
                onClose={handleEnvironmentClose}
            />
        </>
    );
};