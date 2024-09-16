import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BetaBanner from './betaBanner';

import Heading from '@theme/Heading';
// import styles from './index.module.css';
import styles from './ApplicationAdvertise.module.css'; // Import the CSS module
import './header.css'; // Link to your custom CSS

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="header"> {/* Apply custom class here */}
      <div className="header-container">
        <div className="left-section">
        <div className="title-container">
          <h1 className="title">
            <span className="robo-gradient">RoboEverything</span>
          </h1>
          <span className="by-lever text-lightModeBlack dark:text-white"><span className="by">by </span><span className="lever-gradient"><span className="L">L</span>EVER</span></span>
        </div>
          <p className="subtitle text-lightModeBlack dark:text-white">
            Beautiful developer tools for ROS2
          </p>
        </div>
        <div className="right-section">
          <img
            src="img/front_abstract.png"
            alt="App Preview"
            className="image-transform" 
          />
        </div>
      </div>
    </header>
  );
}


function ApplicationAdvertise() {
  return (
    <div className={styles.advertiseContainer}>
      {/* Left Section: Title, Subtitle, and Buttons */}
      <div className={styles.textSection}>
        <h1 className={styles.title}>URDF Creator</h1>
        <p className={styles.subtitle}>
          Build robot models effortlessly and free with URDF Creator.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--lg" to="https://marksoulier.github.io/URDF_creator/">
            Go to App
          </Link>
        </div>
      </div>
      {/* Right Section: Image with rounded container */}
      <div className={styles.imageSection}>
      <Link to="https://marksoulier.github.io/URDF_creator/">
        <div className={styles.imageContainer}>
          <img
            src="img/tool.png" // Replace with your image path
            alt="Robot Preview"
            className={styles.image}
          />
        </div>
        </Link>
      </div>
    </div>
  );
}

// "          <Link className="button button--lg" to="/docs/quick-start">
//             Quick Start
//           </Link>"
//           "

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="URDF Creator">
      <HomepageHeader />
      <hr className={styles.pageBreakLine} />
      <ApplicationAdvertise />
      <hr className={styles.pageBreakLine} />
      <main>
        <HomepageFeatures />
        <BetaBanner />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '150px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '1600px', paddingBottom: '56.25%', maxHeight: '900px' /* 16:9 aspect ratio with max height */ }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '80%' }}
              src="https://www.youtube.com/embed/cG2rHluZv3Y?si=mZ_DNSQrA7haZeed"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
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
