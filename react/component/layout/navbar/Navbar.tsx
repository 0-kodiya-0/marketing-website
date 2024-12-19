import { FunctionComponent } from 'react';
import styles from './Navbar.module.scss';

export const Navbar: FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.iconIoniconsOutlineReWrapper}>
        <img className={styles.iconIoniconsOutlineRe} alt="" src="icon / ionicons / outline / reorder-four-outline.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.environmentWrapper}>
          <b className={styles.environment}>Environment</b>
        </div>
        <img className={styles.iconTablerIconsDotsVer} alt="" src="icon / tabler-icons / dots-vertical.svg" />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.iconIconoirSearchParent}>
            <img className={styles.iconIconoirSearch} alt="" src="icon / iconoir / search.svg" />
            <b className={styles.environment}>Search</b>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.iconBootstrapOutlineLParent}>
            <img className={styles.iconBootstrapOutlineL} alt="" src={`icon / bootstrap / outline & logos / inbox.svg`} />
            <img className={styles.iconBootstrapOutlineL} alt="" src="icon / ionicons / outline / notifications-outline.svg" />
            <img className={styles.iconBootstrapOutlineL} alt="" src="icon / feathericons / settings.svg" />
          </div>
          <div className={styles.frameChild} />
        </div>
      </div>
    </div>);
};
