'use client';

import React, { useEffect } from 'react';
import styles from './Drawer.module.scss';

type DrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    position?: 'left' | 'right';
};

const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    children,
    position = 'right',
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';

            // when drawer open (isOpen === true), it sets:
            //    body {
            //        overflow: hidden;
            //    }
            // this prevents the background content from scrolling when the drawer is open 
            //
        } else {
            document.body.style.overflow = '';
            // when the drawer closes (isOpen === false), 
            // it restores normal scrolling by removing the overflow style
        }
        return () => {
            document.body.style.overflow = '';
            // this is a cleanup function , it runs:
            //     * when the component unmounts, or
            //     * before the next useEffect runs again (if isOpen changes again)
            // this ensures scroll is always reset to normal if the drawer is removed unexpectedly
        };
    }, [isOpen]);

    return (
        <>
            <div
                className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
                onClick={onClose}
            />
            <aside
                className={`${styles.drawer} ${styles[position]} ${isOpen ? styles.open : ''}`}
            >
                <button className={styles.closeButton} onClick={onClose} style={{color: "black"}}>
                    ✕
                </button>
                <div className={styles.content}>{children}</div>
            </aside>
        </>
    );
};

export default Drawer;
