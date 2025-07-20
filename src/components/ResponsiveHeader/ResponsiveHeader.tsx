import { Menu } from 'lucide-react';
import styles from './ResponsiveHeader.module.scss';
import Drawer from '../Drawer/Drawer';
import { useState } from 'react';
import Link from 'next/link';

const ResponsiveHeader: React.FC = () => {

    const [drawerIsOpen, setDrawerIsOpen] = useState <boolean> (false);

    const handleOpenDrawer = (): void => setDrawerIsOpen(true);
    const handleCloseDrawer = (): void => setDrawerIsOpen(false);

    return (
        <div className={styles.wrapper}>
            <Menu
                color="yellow"
                className={styles.icon}
                onClick={() => handleOpenDrawer()}
            />

            <Drawer
                isOpen={drawerIsOpen}
                position="left"
                onClose={handleCloseDrawer}
            >
                <ul className={`${styles.navLinks} ${drawerIsOpen ? styles.show : ''}`}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    {/* <li><Link href="/services">Services</Link></li> */}
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </Drawer>
        </div>
    );
}

export default ResponsiveHeader;