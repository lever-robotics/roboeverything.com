import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BetaBanner from './betaBanner';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
            <div style={{ marginBottom: '20px' }}> {/* Wrap the first link in a div and add bottom margin */}
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Start with Tutorials
              </Link>
            </div>
            <div style={{ marginTop: '20px' }}> {/* Keep the second link wrapped in a div for consistency */}
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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <BetaBanner />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '150px'}}>
          <iframe
            width="1600"
            height="900"
            src="https://www.youtube.com/embed/cG2rHluZv3Y?si=mZ_DNSQrA7haZeed"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <section>
          <div className="container" style={{ marginBottom: '20px' }}> {/* Add margin bottom to the container */}
            <img
              src="/img/platform.png"
              alt="Platform"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="container" style={{ marginBottom: '20px' }}> {/* Add margin bottom to the container */}
            <label>Robot Arm</label>
            <img
              src="/img/robot_arm.png"
              alt="Platform"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="container" style={{ marginBottom: '20px' }}> {/* Add margin bottom to the container */}
          <label>Robot Arm in Rviz</label>
            <img
              src="/img/robot_arm_rviz.png"
              alt="Platform"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
