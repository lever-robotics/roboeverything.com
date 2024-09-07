import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureSvgContainer)}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <div style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
          <Heading as="h3">{title}</Heading>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">

          {/* Feature 1: Easy to Use */}
          <Feature
            Svg={require('@site/static/img/undraw_docusaurus_mountain.svg').default}
            title="Easy to Use"
            description={
              <>
                URDF Creator is designed to be easy to use for robotic developers. This documentation provides clear
                instructions on how to use the tool to create URDF files for your robots.
              </>
            }
          />

          {/* Feature 2: Focus on What Matters */}
          <Feature
            Svg={require('@site/static/img/undraw_docusaurus_tree.svg').default}
            title="Focus on What Matters"
            description={
              <>
                URDF Creator lets you focus on what matters, the complexities of intelligent robotics.
                By designing your robot model here you can validate all aspects of the robot (parts, joints, sensors, etc.)
                are all positioned and defined correctly before you start robot development.
              </>
            }
          />

          {/* Feature 3: Developed for ROS2 */}
          <Feature
            Svg={require('@site/static/img/undraw_docusaurus_react.svg').default}
            title="Developed for ROS2"
            description={
              <>
                This application is used to assist in the development of robots for the Robot Operating System 2 (ROS2).
                Export robot description packages that are ready-made to be built and run.
              </>
            }
          />
          
        </div>
      </div>
    </section>
  );
}
