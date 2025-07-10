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
import GitIcon from "../../../public/icons/GitIcon";
import GitlabIcon from "../../../public/icons/GitlabIcon";
import FirebaseIcon from "../../../public/icons/FirebaseIcon";
import GithubIcon from "../../../public/icons/GithubIcon";
import SassIcon from "../../../public/icons/SassIcon";
import StyledComponentsIcon from "../../../public/icons/StyledComponentsIcon";
import BootstrapIcon from "../../../public/icons/BootstrapIcon";
import WebpackIcon from "../../../public/icons/WebpackIcon";

const Skills: React.FC = () => {
    return (
        <div className={styles.row}>
            <div className={styles.column}>

                <div className={styles.square}>
                    <p>Language</p>
                </div>

                <div className={styles.square}>
                    <p>Frameworks</p>
                </div>

                <div className={styles.square}>
                    CSS
                </div>

                <div className={styles.square}>
                    <p>Database</p>                
                </div>

                <div className={styles.square}>
                    <p>Tools</p>
                </div>

                <div className={styles.square}>
                    <p>Version Control</p>
                </div>

            </div>

            <div className={styles.column}>

                <div className={styles.square}>
                    <div className={styles.javascriptIcon}>
                        <JavascriptIcon />

                        <p>Javascript</p>
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.reactIcon}>
                        <ReactIcon />

                        <p>React.js</p>
                    </div>                    
                </div>

                <div className={styles.square}>
                    <div className={styles.sassIcon}>
                        <SassIcon />

                        <p>Sass</p>
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.postgresqlIcon}>
                        <PostgresqlIcon />

                        <p>PostgreSQL</p>
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.nginxIcon}>
                        <NginxIcon />

                        <p>Nginx</p>
                    </div>                    
                </div>

                <div className={styles.square}>
                    <div className={styles.gitIcon}>
                        <GitIcon />

                        <p>Git</p>
                    </div>
                </div>

            </div>

            <div className={styles.column}>

                <div className={styles.square}>
                    <div className={styles.typescriptIcon}>
                        <TypescriptIcon />

                        <p>Typescript</p>
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.nextjsIcon}>
                        <NextjsIcon />
                        
                        <p>Next.js</p>
                    </div>                    
                </div>

                <div className={styles.square}>
                    <div className={styles.styledComponentsIcon}>
                        <StyledComponentsIcon />
                        
                        <p>Styled Components</p>
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.microsoftSqlServerIcon}>
                        <MicrosoftSqlServerIcon />

                        <p>SQL Server</p>
                    </div>                 
                </div>

                <div className={styles.square}>
                    <div className={styles.dockerIcon}>
                        <DockerIcon />

                        <p>Docker</p>
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.gitlabIcon}>
                        <GitlabIcon />

                        <p>Gitlab</p>
                    </div>
                </div>

            </div>

            <div className={styles.column}>

                <div className={styles.square}>
                    <div className={styles.nodejsIcon}>
                        <NodejsIcon />

                        <p>Node.js</p>
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.expressJsIcon}>
                        <ExpressJsIcon />

                        <p>Express.js</p>
                    </div>
                </div>
                
                <div className={styles.square}>
                    <div className={styles.bootstrapIcon}>
                        <BootstrapIcon />

                        <p>Bootstrap</p>
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.mongodbIcon}>
                        <MongodbIcon />

                        <p>MongoDB</p>
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.webpackIcon}>
                        <WebpackIcon />

                        <p>Webpack</p>
                    </div>
                </div>


                <div className={styles.square}>
                    <div className={styles.githubIcon}>
                        <GithubIcon />

                        <p>Github</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
        // <div className={styles.column}>
        //     <div className={styles.row}>


        //         <div className={styles.nodejsIcon}>
        //             <NodejsIcon />

        //             <p>Node.js</p>
        //         </div>
        //     </div>

        //     <div className={styles.row}>


        //         <div className={styles.expressJsIcon}>
        //             <ExpressJsIcon />

        //             <p>Express.js</p>
        //         </div>
        //     </div>

        //     <div className={styles.row}>
        //         <div className={styles.mongodbIcon}>
        //             <MongodbIcon />

        //             <p>MongoDB</p>
        //         </div>


        //     </div>

        //     <div className={styles.row}>

        //         <div className={styles.nginxIcon}>
        //             <NginxIcon />

        //             <p>Nginx</p>
        //         </div>

        //         <div className={styles.dockerIcon}>
        //             <DockerIcon />

        //             <p>Docker</p>
        //         </div>
        //     </div>

        // </div>