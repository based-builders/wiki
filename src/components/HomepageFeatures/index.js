import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Library',
    Svg: require('@site/static/img/fallen-leaf.svg').default,
    description: (
      <>
        based.builders is a wiki about web3 stuff, mainly used for internal education
      </>
    ),
  },
  {
    title: 'Team',
    Svg: require('@site/static/img/sunflower.svg').default,
    description: (
      <>
        based.builders is a full-stacked team of web3 developers, ready to help you with your project
      </>
    ),
  },
  {
    title: 'Research',
    Svg: require('@site/static/img/pencil.svg').default,
    description: (
      <>
        based.builders is a blog and youtube channel, we can review and reseach projects for your conveniece
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
