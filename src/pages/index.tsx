import type {ReactNode} from 'react';
import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageCard from '@site/src/components/HomepageCard';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import TextTransition, { presets } from 'react-text-transition';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
        
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
    const TEXTS = ['Gain', 'Creativity', 'Grow'];
   const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1300, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in"
      // navbar={true}
      noFooter={true}
     
      >
         
      <main className={styles.comWrapper}>
        <div className={styles.con}>
          <div className={styles.heroSection}>
            <h2>
            Welcome to
          </h2>
          <div className={styles.heroLogo}>
            <svg  viewBox="0 0 725 175" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.heroLogSvg} d="M587.5 175H537.5C537.5 175 462.5 174.58 462.5 87.68C462.5 0.779991 537.5 0.179993 537.5 0.179993H587.5V37.68L562.5 62.68H537.5L525 75.18V100.18L537.5 112.68H562.5L587.5 143.93V175ZM675 175C675 175 600 175 600 87.5C600 0 675 0 675 0C675 0 725 0 725 50V75L700 100H662.5L675 112.5H700L725 143.75V175H675ZM200 125V175H137.5V0H200C200 0 262.5 0 262.5 62.5C262.5 125 200 125 200 125ZM81.25 68.75V62.5H118.75V0H62.5C62.5 0 0 0 0 50C0 100 43.75 106.25 43.75 106.25V112.5H6.21001L6.45 175H62.5C62.5 175 125 175 125 125C125 75 81.25 68.75 81.25 68.75ZM450 87.5C450 104.806 444.868 121.723 435.254 136.112C425.639 150.502 411.973 161.717 395.985 168.339C379.996 174.962 362.403 176.695 345.43 173.319C328.456 169.943 312.865 161.609 300.628 149.372C288.391 137.135 280.057 121.544 276.681 104.57C273.305 87.5971 275.038 70.0037 281.661 54.0152C288.283 38.0267 299.498 24.361 313.888 14.7464C328.277 5.13179 345.194 0 362.5 0C385.706 0.00265162 407.96 9.22223 424.369 25.6311C440.778 42.0399 449.997 64.2944 450 87.5ZM426.89 151.89H450V175H426.89V151.89Z" fill="none"/>
            </svg>
          </div>
          <h1 className={styles.heroText}>
            Enabling organizations to 
            <TextTransition inline={true} className={styles.switchText} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            ...
          </h1>
            
          
          </div>
          <HomepageCard/>
        </div>
           <h1>

    </h1>

      </main>
    </Layout>
  );
}

