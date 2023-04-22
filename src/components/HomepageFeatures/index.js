import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Wiki',
    Svg: require('@site/static/img/fallen-leaf.svg').default,
    description: (
      <>
        This is a library about web3 stuff.
        Follow selected updates <a href="https://t.me/based_builders">on Telegram</a>
      </>
    ),
  },
  {
    title: 'Team',
    Svg: require('@site/static/img/sunflower.svg').default,
    description: (
      <>
        We are a team of developers and researchers, ready to help you with your project
      </>
    ),
  },
  {
    title: 'Projects',
    Svg: require('@site/static/img/pencil.svg').default,
    description: (
      <>
        We have <a href="/blog">a blog</a> and other projects (soon), check them out
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
