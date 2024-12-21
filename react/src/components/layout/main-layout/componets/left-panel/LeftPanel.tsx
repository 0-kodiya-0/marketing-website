import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import styles from './LeftPanel.module.scss';
import {
    FolderOutline,
    GitPullRequestOutline,
    History,
    LayoutGridAdd,
    NavArrowDown,
    PlaylistAdd,
    TrashOutline
} from "@icons";

const LeftPanel: FunctionComponent = () => {
    const contentBarRef = useRef<HTMLDivElement>(null);
    const [isResizing, setIsResizing] = useState(false);

    const resizeData = useRef({
        startX: 0,
        startWidth: 0,
    });

    const handleResizeStart = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        if (!contentBarRef.current) return;

        setIsResizing(true);
        resizeData.current = {
            startX: e.clientX,
            startWidth: contentBarRef.current.offsetWidth,
        };

        document.body.classList.add('resizing');
    }, []);

    const handleResize = useCallback((e: MouseEvent) => {
        if (!isResizing || !contentBarRef.current) return;

        // Calculate the change in position
        const delta = e.clientX - resizeData.current.startX;

        // Calculate new width based on the initial width plus the movement delta
        const newWidth = resizeData.current.startWidth + delta;

        // Define our constraints
        const minWidth = 67; // Minimum visible width (leftNavbar width)
        const maxWidth = window.innerWidth * 0.95 - 67; // Maximum width

        // Clamp the new width between our min and max values
        const clampedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

        // Apply the new width to our container
        contentBarRef.current.style.width = `${clampedWidth}px`;
    }, [isResizing]);

    const handleResizeEnd = useCallback(() => {
        setIsResizing(false);
        document.body.classList.remove('resizing');
    }, []);

    useEffect(() => {
        if (isResizing) {
            document.addEventListener('mousemove', handleResize);
            document.addEventListener('mouseup', handleResizeEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleResize);
            document.removeEventListener('mouseup', handleResizeEnd);
        };
    }, [isResizing, handleResize, handleResizeEnd]);

    return (
        <div className={styles.leftPanel}>
            <div className={styles.leftNavbar}>
                <div className={styles.projectsHolder}>
                    <div className={styles.project}/>
                    <div className={styles.project}/>
                    <div className={styles.project}/>
                    <img
                        className={styles.iconTablerIconsLayoutG}
                        alt="Add Project"
                        src={LayoutGridAdd}
                    />
                </div>

                <div className={styles.servicesHolder}>
                    <img alt="Folder" src={FolderOutline}/>
                    <img alt="History" src={History}/>
                    <img alt="Git" src={GitPullRequestOutline}/>
                    <img alt="Trash" src={TrashOutline}/>
                </div>
            </div>

            <div
                ref={contentBarRef}
                className={styles.leftContentBar}
            >
                {/* Inner container with fixed width */}
                <div className={styles.contentContainer}>
                    <div className={styles.projectNavbar}>
                        <b>Project Title</b>
                    </div>

                    <div className={styles.projectItem}>
                        <div className={styles.channelsParent}>
                            <img alt="Expand" src={NavArrowDown}/>
                            <b>Channels</b>
                        </div>
                        <img alt="Add Channel" src={PlaylistAdd}/>
                    </div>
                </div>

                <div
                    className={`${styles.resizeHandle} ${isResizing ? styles.resizing : ''}`}
                    onMouseDown={handleResizeStart}
                />
            </div>
        </div>
    );
};

export default LeftPanel;