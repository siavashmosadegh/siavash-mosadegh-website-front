'use client';

import React from "react";
import JavascriptIcon from "../../../public/icons/JavascriptIcon";
import styles from "./skills.module.scss";
import TypescriptIcon from "../../../public/icons/TypescriptIcon";
import ReactIcon from "../../../public/icons/ReactIcon";
import NextjsIcon from "../../../public/icons/NextjsIcon";
import NodejsIcon from "../../../public/icons/NodejsIcon";
import PostgresqlIcon from "../../../public/icons/PostgresqlIcon";
import MicrosoftSqlServerIcon from "../../../public/icons/MicrosoftSqlServerIcon";
import ExpressJsIcon from "../../../public/icons/ExpressJsIcon";
import NginxIcon from "../../../public/icons/NginxIcon";
import DockerIcon from "../../../public/icons/DockerIcon";
import MongodbIcon from "../../../public/icons/MongodbIcon";

const Skills: React.FC = () => {
    return (
        <div className={styles.column}>
            <div className={styles.row}>
                <div className={styles.javascriptIcon}>
                    <JavascriptIcon />

                    <p>Javascript</p>
                </div>

                <div className={styles.typescriptIcon}>
                    <TypescriptIcon />

                    <p>Typescript</p>
                </div>

                <div className={styles.nodejsIcon}>
                    <NodejsIcon />

                    <p>Node.js</p>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.reactIcon}>
                    <ReactIcon />

                    <p>React.js</p>
                </div>

                <div className={styles.nextjsIcon}>
                    <NextjsIcon />
                    
                    <p>Next.js</p>
                </div>

                <div className={styles.expressJsIcon}>
                    <ExpressJsIcon />

                    <p>Express.js</p>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.mongodbIcon}>
                    <MongodbIcon />

                    <p>MongoDB</p>
                </div>

                <div className={styles.postgresqlIcon}>
                    <PostgresqlIcon />

                    <p>PostgreSQL</p>
                </div>

                <div className={styles.microsoftSqlServerIcon}>
                    <MicrosoftSqlServerIcon />

                    <p>Microsoft SQL Server</p>
                </div>
            </div>

            <div className={styles.row}>

                <div className={styles.nginxIcon}>
                    <NginxIcon />

                    <p>Nginx</p>
                </div>

                <div className={styles.dockerIcon}>
                    <DockerIcon />

                    <p>Docker</p>
                </div>
            </div>

        </div>
    );
}

export default Skills;