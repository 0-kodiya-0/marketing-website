import { FunctionComponent } from 'react';
import styles from './LeftPanel.module.scss';


const LeftPanel: FunctionComponent = () => {
    return (
        <div className={styles.leftPanel}>
            <div className={styles.leftContentBar}>
                <div className={styles.projectNavbar}>
                    <b className={styles.projectTitle}>Project Title</b>
                    <div className={styles.iconIoniconsOutlineFiParent}>
                        <img className={styles.iconIoniconsOutlineFi} alt="" src="icon / ionicons / outline / filter-outline.svg" />
                        <img className={styles.iconIoniconsOutlineFi} alt="" src="icon / ionicons / sharp / ellipsis-horizontal-sharp.svg" />
                    </div>
                </div>
                <div className={styles.projectItemHolder}>
                    <div className={styles.projectItem}>
                        <div className={styles.channelsParent}>
                            <b className={styles.channels}>Channels</b>
                            <img className={styles.iconIconoirNavArrowDow} alt="" src="icon / iconoir / nav-arrow-down.svg" />
                        </div>
                        <img className={styles.iconIoniconsOutlineFi} alt="" src="icon / iconoir / playlist-add.svg" />
                    </div>
                    <div className={styles.projectItem}>
                        <div className={styles.channelsParent}>
                            <b className={styles.channels}>Channels</b>
                            <img className={styles.iconIconoirNavArrowDow} alt="" src="icon / iconoir / nav-arrow-down.svg" />
                        </div>
                        <img className={styles.iconIoniconsOutlineFi} alt="" src="icon / iconoir / playlist-add.svg" />
                    </div>
                    <div className={styles.projectItem}>
                        <div className={styles.channelsParent}>
                            <b className={styles.channels}>Channels</b>
                            <img className={styles.iconIconoirNavArrowDow} alt="" src="icon / iconoir / nav-arrow-down.svg" />
                        </div>
                        <img className={styles.iconIoniconsOutlineFi} alt="" src="icon / iconoir / playlist-add.svg" />
                    </div>
                    <div className={styles.projectItem}>
                        <div className={styles.channelsParent}>
                            <b className={styles.channels}>Channels</b>
                            <img className={styles.iconIconoirNavArrowDow} alt="" src="icon / iconoir / nav-arrow-down.svg" />
                        </div>
                        <img className={styles.iconIoniconsOutlineFi} alt="" src="icon / iconoir / playlist-add.svg" />
                    </div>
                    <div className={styles.projectItem}>
                        <div className={styles.channelsParent}>
                            <b className={styles.channels}>Channels</b>
                            <img className={styles.iconIconoirNavArrowDow} alt="" src="icon / iconoir / nav-arrow-down.svg" />
                        </div>
                        <img className={styles.iconIoniconsOutlineFi} alt="" src="icon / iconoir / playlist-add.svg" />
                    </div>
                </div>
            </div>
            <div className={styles.leftNavbar}>
                <div className={styles.projectsHolder}>
                    <div className={styles.project}>
                        <div className={styles.project1} />
                    </div>
                    <div className={styles.project}>
                        <div className={styles.project1} />
                    </div>
                    <div className={styles.project}>
                        <div className={styles.project1} />
                    </div>
                    <img className={styles.iconTablerIconsLayoutG} alt="" src="icon / tabler-icons / layout-grid-add.svg" />
                </div>
                <div className={styles.servicesHolder}>
                    <img className={styles.iconIoniconsOutlineFo} alt="" src="icon / ionicons / outline / folder-outline.svg" />
                    <img className={styles.iconIoniconsOutlineFo} alt="" src="icon / tabler-icons / history.svg" />
                    <img className={styles.iconIoniconsOutlineFo} alt="" src="icon / ionicons / outline / git-pull-request-outline.svg" />
                    <img className={styles.iconIoniconsOutlineFo} alt="" src="icon / ionicons / outline / trash-outline.svg" />
                </div>
            </div>
        </div>);
};

export default LeftPanel;
