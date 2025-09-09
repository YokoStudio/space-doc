import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import './styles.module.css'
import siteMetadata from '@generated/site-metadata';

type FeatureItem = {
  title: string;
  description: ReactNode;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Get Start',
    href:'/docs/category/get-start',
    description: (
      <>
        Start with Yoko Space
      </>
     
    ),
  },
  {
    title: 'Foundation',
    href:'/docs/category/foundation',
    description: (
      <>
        Docusaurus lets you 
      </>
    ),
  },
  {
    title: 'Contributing',
    href:'/docs/category/contributing',
    description: (
      <>
        Extend or customize your 
      </>
    ),
  },
  {
    title: 'Components',
    href:'/docs/category/components',
    description: (
      <>
        Extend or customize your 
      </>
    ),
  },
];

function Feature({title, href, description}: FeatureItem) {
  return (
    
    <a  href={href} className={styles.card}>
      
      <div>
        <span className={styles.cardTitle}>{title}</span><br></br>
        <span>{description}</span>
      </div>
    </a>
  );
}

export default function HomepageCard(): ReactNode {
  return (
    <div className={styles.con}>
      
      <section className={styles.homecardbg}>
      
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
     
    </section>
    </div>
  );
}
