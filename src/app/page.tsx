'use client';

import { motion } from 'framer-motion';
import styles from './page.module.scss';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.name}
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, delay: 1 }}
      >
        Siavash Mosadegh
      </motion.h1>

      <motion.h2
        className={styles.title}
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, delay: 1.5 }}
      >
        Software Engineer
      </motion.h2>
    </div>
  );
}