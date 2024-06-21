import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './BetaBanner.module.css';

const BetaBanner = () => {
return (
    <div className={clsx(styles.banner)}>
        <h2>Join Beta Testers</h2>
        <p>Help guide the future direction of the RoboEverything project and receive early access to future developments.</p>
        <a className={clsx('button button--lg', styles.button)} href="https://usu.co1.qualtrics.com/jfe/form/SV_ezB1drdf9RDILTE">
            Join Beta
        </a>
    </div>
);
};

export default BetaBanner;