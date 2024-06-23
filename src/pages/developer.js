// src/pages/DeveloperPage.js

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function DeveloperHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Developer</h1>
        <p className="hero__subtitle">
          Welcome to the developer community for RoboEverything.
        </p>
      </div>
    </header>
  );
}

export default function DeveloperPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Developer - ${siteConfig.title}`}
      description="Developer community for RoboEverything">
      <DeveloperHeader />
      <main className="container">
        <p>
          If you are a developer or robotics enthusiast, we are excited that you are here. Active issues should be placed in the GitHub repository. You can also submit issues via our bug survey.
        </p>
        <div className={styles.buttons}>
          <div style={{ margin: '20px' }}>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/marksoulier/urdf_documentation">
              Go to GitHub
            </Link>
          </div>
          <div style={{ margin: '20px' }}>
            <Link
              className="button button--secondary button--lg"
              to="https://usu.co1.qualtrics.com/jfe/form/SV_1zuhvdNnqi5qxro">
              Submit Bug Survey
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
