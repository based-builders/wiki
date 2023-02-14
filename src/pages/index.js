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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/category/defi-primitives"> DeFi Primitives </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/category/defi-mechanics"> DeFi Mechanics </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/Farming"> 🌾 Farming </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/Tokenomics"> 📊 Analytics </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/DAOscape"> 🗺️ DAOscape </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/Community-Building"> 🌻 Community Building </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/category/nftfi"> 🧩 NFTfi </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/category/gamefi"> 🕹️ GameFi </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/Identity"> 👁 Identity </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/OpSec"> 👁️‍🗨️ OpSec </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/OSINT"> 🔎 OSINT </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/AI-Tools"> 🎨 AI Tools </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/Piracy-Open-Content"> 🏴‍☠️ Piracy </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/Primitives-ZKP-FHE-MPC"> ⚙️ Dev </Link>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/Hackathons-Grants-VCs"> 💼 Jobs </Link>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary margin--xs padding--sm button--lg shadow--tl" to="/Crypto-friendly-products-and-services"> Use crypto </Link>
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
