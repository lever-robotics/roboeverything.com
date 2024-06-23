// src/pages/DownloadPage.js

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function DownloadHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Download URDF Creator</h1>
        <p className="hero__subtitle">
          A downloadable version of the URDF Creator is not currently developed. We are currently receiving feedback from robotics developers, please consider also give your input by joining the <a href="https://usu.co1.qualtrics.com/jfe/form/SV_ezB1drdf9RDILTE">beta group</a>. Use the following link to use the beta version.
        </p>
        <div className={styles.buttons}>
          <div style={{ margin: '20px' }}>
            <Link
              className="button button--secondary button--lg"
              to="https://marksoulier.github.io/URDF_creator/">
              Go to App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function DownloadPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Download - ${siteConfig.title}`}
      description="Download the URDF Creator">
      <DownloadHeader />
      <main>
        {/* Add any additional content you want here */}
      </main>
    </Layout>
  );
}
