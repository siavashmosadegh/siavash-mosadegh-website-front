'use client';

import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import styles from './Layout.module.scss';
import Navbar from '../Navbar/Navbar';
import ResponsiveHeader from '../ResponsiveHeader/ResponsiveHeader';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const theme = useSelector((state: RootState) => state.theme.theme);

    console.log(theme);

    // Combine SCSS class with the theme class (light or dark)
    const wrapperClassName = `${styles.layoutWrapper} ${theme}`;

    return (
        <div className={wrapperClassName}>
            <header className={styles.headerWrapper}>
                <Navbar />
            </header>

            <header className={styles.responsiveHeaderWrapper}>
                <ResponsiveHeader />
            </header>

            <div className={styles.childrenWrapper}>{children}</div>

            <footer>{/* <Footer /> */}</footer>
        </div>
    );
};

export default Layout;
