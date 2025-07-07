'use client';

import React from 'react';
import styles from './about.module.scss';
import { TypeAnimation } from 'react-type-animation';

const About : React.FC = () => {
    return (
    <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>
      <TypeAnimation
        sequence={[
          'Writing clean code...',
          1500,
          'Building UIs...',
          1500,
          'Deploying to production...',
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>    );
};

export default About;
