import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from './Tiff.module.css';
import LabelledField from './LabelledField';

export default function Tiff() {
  const [fontA, setFontA] = React.useState('');
  const [fontB, setFontB] = React.useState('');

  return (
    <React.Fragment>
      <Head>
        <title>Tiff - A type diff tool</title>
      </Head>
      <aside className={styles.ribbon}>
        <div className={styles.content}>
          <h1>Tiff</h1>
          <section>
            <p className={styles.subtitle}>A type diff tool that visually contrasts the differences between two fonts.</p>
            <p className={styles.disclaimer}>
              Currently supports fonts from the&nbsp;
              <Link href='https://www.google.com/fonts'>Google Web Fonts</Link>&nbsp;
              library and any system fonts. Best if viewed on the latest version of modern browsers.
            </p>
          </section>
        </div>
      </aside>
      <main className={styles.primary}>
        <div className={styles.content}>
          <section>
            <LabelledField type="text" value={fontA} label="Font A" className={styles.fontA} />
            <LabelledField type="text" value={fontB} label="Font B" className={styles.fontB} />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}