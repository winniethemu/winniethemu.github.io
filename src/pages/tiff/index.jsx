import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import styles from './Tiff.module.css';
import LabelledField from './LabelledField';
import { API_BASE_URL, API_KEY } from './const';

export default function Tiff() {
  const [fontA, setFontA] = React.useState('');
  const [fontB, setFontB] = React.useState('');
  const [fonts, setFonts] = React.useState([]);

  React.useEffect(() => {
    fetch(`${API_BASE_URL}?key=${API_KEY}`)
      .then(resp => resp.json())
      .then(json => {
        setFonts(json.items);
      });
  }, []);

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
              label="Font A"
              className={styles.fontA}
              handleFont={(value) => setFontA(value)}
              options={fonts}
            />
            <LabelledField
              label="Font B"
              className={styles.fontB}
              handleFont={(value) => setFontB(value)}
              options={fonts}
            />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}