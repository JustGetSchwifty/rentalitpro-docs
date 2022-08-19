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
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Zobrazit návody
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Návody a rady`}
      description="Informace, rady a tipy pro implementaci Rentalit Pro do vašeho řešení."
    >
      <HomepageHeader />
      <main>
        <h1 class="vyhody">Výhody Rentalit Pro</h1>
        <HomepageFeatures />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Zobrazit návody
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="https://rentalitpro.cz/#kontakt"
          >
            Kontaktovat obchodní oddělení
          </Link>
        </div>
      </main>
    </Layout>
  );
}
