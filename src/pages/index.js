import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/category/defi-primitives"> DeFi Primitives </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/category/defi-mechanics"> DeFi Mechanics </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/Farming"> πΎ Farming </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/Tokenomics"> π Analytics </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/DAOscape"> πΊοΈ DAOscape </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/Community-Building"> π» Community Building </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/category/nftfi"> π§© NFTfi </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/category/gamefi"> πΉοΈ GameFi </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/Identity"> π Identity </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/OpSec"> ποΈβπ¨οΈ OpSec </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/OSINT"> π OSINT </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/AI-Tools"> π¨ AI Tools </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/Piracy-Open-Content"> π΄ββ οΈ Piracy </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/Primitives-ZKP-FHE-MPC"> βοΈ Dev </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/Hackathons-Grants-VCs"> πΌ Jobs </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg" to="/Crypto-friendly-products-and-services"> Use crypto </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      //title={`Hello from ${siteConfig.title}`}
      description="web3 wiki for builders">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
