import React, {useEffect} from 'react';
import styles from './index.module.scss';
import {joinClasses} from "../../utils/styles/classes";
import {LogoLoaderProps} from "./types";

const LogoLoader: React.FC<LogoLoaderProps> = (props: LogoLoaderProps): JSX.Element | null => {

    if(!props.isVisible) {
        return null
    }

    return (
        <div className={joinClasses([styles.root, props.className])} style={{width: props.size || 50, height: props.size || 50}}>
            <div className={joinClasses([styles.item, styles.blue])} />
            <div className={joinClasses([styles.item, styles.green])} />
            <div className={joinClasses([styles.item, styles.red])} />
            <div className={joinClasses([styles.item, styles.yellow])} />
        </div>
    );
};

export default LogoLoader;