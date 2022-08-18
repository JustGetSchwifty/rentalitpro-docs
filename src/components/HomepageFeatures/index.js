import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Více možností',
    Svg: require('@site/static/img/world-svgrepo-com.svg').default,
    description: (
      <>
        Rentalit Pro nabízí několik metod možné implementace a záleží čistě na
        vás, jakou si zvolíte.
      </>
    ),
  },
  {
    title: 'Rychlé nasazení',
    Svg: require('@site/static/img/fast-forward-svgrepo-com.svg').default,
    description: (
      <>
        Rentalit Pro je možné implementovat velmi rychle s minimálními
        programátorskými pracemi na vaší straně.
      </>
    ),
  },
  {
    title: 'Plně automatické',
    Svg: require('@site/static/img/industrial-robot-svgrepo-com.svg').default,
    description: (
      <>
        Pokud budete chtít, systém Rentalit Pro může s vaším řešením komunikovat
        na stoprocentně automatické bázi a vy se tak nemusíte o nic starat.
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
