import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from './Tiff.module.css';
import FontSelector from './FontSelector';
import Letter from './Letter';

export default function Tiff() {
  const [fontA, setFontA] = React.useState('');
  const [fontB, setFontB] = React.useState('');
  const [letters, setLetters] = React.useState(['R', 'g', 'h', 'e']);

  React.useEffect(() => {
    (async () => {
      const WebFont = (await import('webfontloader')).default;
      WebFont.load({
        google: {
          families: [fontA.family || '', fontB.family || ''],
        }
      });
    })();
  }, [fontA, fontB]);

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
            <FontSelector
              label="Font A"
              className={styles.fontA}
              handleFont={(value) => setFontA(value)}
            />
            <FontSelector
              label="Font B"
              className={styles.fontB}
              handleFont={(value) => setFontB(value)}
            />
          </section>
          <section className={styles.fontDisplay}>
            <Letter value={letters[0]} fontA={fontA} fontB={fontB} />
            <Letter value={letters[1]} fontA={fontA} fontB={fontB} />
            <Letter value={letters[2]} fontA={fontA} fontB={fontB} />
            <Letter value={letters[3]} fontA={fontA} fontB={fontB} />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}