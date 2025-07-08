'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState <Boolean> (true);

    const toggleMenu = (): void => setIsOpen(!isOpen);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
