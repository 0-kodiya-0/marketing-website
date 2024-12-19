import { FunctionComponent } from 'react';
import styles from './Footer.module.scss';


export const Footer: FunctionComponent = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.iconIoniconsOutlineShParent}>
                <img className={styles.iconIoniconsOutlineSh} alt="" src="icon / ionicons / outline / shield-checkmark-outline.svg" />
                <img className={styles.iconIoniconsOutlineSh} alt="" src={`icon / bootstrap / outline & logos / cloud-check.svg`} />
            </div>
            <img className={styles.iconTablerIconsHelp} alt="" src="icon / tabler-icons / help.svg" />
        </div>
    );
};
