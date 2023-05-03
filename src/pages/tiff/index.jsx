import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from './Tiff.module.css';
import LabelledField from './LabelledField';

export default function Tiff() {
  const [fontA, setFontA] = React.useState('');
  const [fontB, setFontB] = React.useState('');

  const handleChangeFont = (type, event) => {
    if (type === 'A') {
      setFontA(event.target.value);
    } else {
      setFontB(event.target.value);
    }
  };

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
          <section className={styles.fontSelect}>
            <LabelledField
              className={styles.fontA}
              label="Font A"
              handleOnChange={(e) => handleChangeFont('A', e)}
              type="text"
              value={fontA}
            />
            <LabelledField
              className={styles.fontB}
              label="Font B"
              handleOnChange={(e) => handleChangeFont('B', e)}
              type="text"
              value={fontB}
            />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}