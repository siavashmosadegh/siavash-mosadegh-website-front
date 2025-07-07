'use client';

import React, { useEffect, useState } from 'react';
import styles from './about.module.scss';

const lines = [
  'Hello, my name is SiavashMosadegh',
  'I am a software engineer',
  'I have graduated from KNTU',
  'I know JavaScript',
  'I use Next.js + TypeScript for front projects',
  'I use Node.js + Express.js + Nest.js for backend projects',
  'I am familiar with SQL Server + MongoDB + Postgres + MySQL',
];

const About: React.FC = () => {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentCharIndex + 1));
        setCurrentCharIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      // Finish current line, push to final list, move to next
      const delay = setTimeout(() => {
        setTypedLines((prev) => [...prev, currentLine]);
        setCurrentCharIndex(0);
        setCurrentText('');
        setCurrentLineIndex((prev) => prev + 1);
      }, 500); // Pause before next line

      return () => clearTimeout(delay);
    }
  }, [currentCharIndex, currentLineIndex]);

  return (
    <div className={styles.wrapper}>
      {typedLines.map((line, i) => (
        <p key={i} className={styles.line}>
          {line}
        </p>
      ))}

      {currentLineIndex < lines.length && (
        <p className={styles.typing}>
          {currentText}
          <span className={styles.cursor}>|</span>
        </p>
      )}
    </div>
  );
};

export default About;
