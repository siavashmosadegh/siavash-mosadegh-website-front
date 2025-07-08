'use client';

import React from "react";
import JavascriptIcon from "../../../public/icons/JavascriptIcon";
import styles from "./skills.module.scss";
import TypescriptIcon from "../../../public/icons/TypescriptIcon";
import ReactIcon from "../../../public/icons/ReactIcon";
import NextjsIcon from "../../../public/icons/NextjsIcon";
import NodejsIcon from "../../../public/icons/NodejsIcon";
import PostgresqlIcon from "../../../public/icons/PostgresqlIcon";

const Skills: React.FC = () => {
    return (
        <div>
            <div className={styles.javascriptIcon}>
                <JavascriptIcon />
            </div>

            <div className={styles.typescriptIcon}>
                <TypescriptIcon />
            </div>

            <div className={styles.reactIcon}>
                <ReactIcon />
            </div>

            <div className={styles.nextjsIcon}>
                <NextjsIcon />
            </div>

            <div className={styles.nodejsIcon}>
                <NodejsIcon />
            </div>

            <div className={styles.postgresqlIcon}>
                <PostgresqlIcon />
            </div>
        </div>
    );
}

export default Skills;