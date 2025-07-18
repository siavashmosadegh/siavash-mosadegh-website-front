'use client';

import React, { ReactNode } from 'react';
//import Header from '../Main/Header';
//import ResponsiveHeader from '../Main/ResponsiveHeader';
//import Footer from './Footer';
import styles from './Layout.module.scss';
import Navbar from '../Navbar/Navbar';
import ResponsiveHeader from '../ResponsiveHeader/ResponsiveHeader';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layoutWrapper}>
            <header className={styles.headerWrapper}>
                <Navbar />
            </header>

            <header className={styles.responsiveHeaderWrapper}>
                <ResponsiveHeader />
            </header>

            <div className={styles.childrenWrapper}>
                {children}
            </div>

            <footer>
                {/* <Footer /> */}
            </footer>
        </div>
    );
};

export default Layout;
