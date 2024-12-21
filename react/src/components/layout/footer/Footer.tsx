import {FunctionComponent} from 'react';
import styles from './Footer.module.scss';
import {CloudCheck, Help, ShieldCheckmarkOutline} from "@icons";

export const Footer: FunctionComponent = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.iconIoniconsOutlineShParent}>
                <img
                    className={styles.iconIoniconsOutlineSh}
                    alt="Security Status"
                    src={ShieldCheckmarkOutline}
                />
                <img
                    className={styles.iconIoniconsOutlineSh}
                    alt="Cloud Status"
                    src={CloudCheck}
                />
            </div>
            <img
                className={styles.iconTablerIconsHelp}
                alt="Help"
                src={Help}
            />
        </div>
    );
};