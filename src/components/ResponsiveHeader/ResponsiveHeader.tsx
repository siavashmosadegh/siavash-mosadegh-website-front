import { Menu } from 'lucide-react';
import styles from './ResponsiveHeader.module.scss';

const ResponsiveHeader: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Menu color="white" className={styles.icon}/>
        </div>
    );
}

export default ResponsiveHeader;