'use client';

import { motion } from 'framer-motion';
import styles from './page.module.scss';
import { useRef } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <motion.h1
          className={styles.name}
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.3 }}
        >
          Siavash Mosadegh
        </motion.h1>

        <motion.h2
          className={styles.title}
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.6 }}
        >
          Software Engineer
        </motion.h2>

        <motion.div
          className={styles.arrow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={handleScroll}
        >
          ↓
        </motion.div>
      </section>

      <section className={styles.scrollSection} ref={scrollRef}>
        <Link href="/about" className={styles.aboutButton}>
          About Me
        </Link>
      </section>
    </div>
  );
}